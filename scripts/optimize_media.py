import os
import subprocess
import time
import imageio_ffmpeg
from PIL import Image

def optimize_videos():
    print("=== OPTIMIZING VIDEOS ===")
    exe = imageio_ffmpeg.get_ffmpeg_exe()
    videos = ['pc_bg.mp4', 'mobile_bg.mp4']
    for v in videos:
        input_path = os.path.join('public', v)
        if not os.path.exists(input_path):
            continue
        temp_path = os.path.join('public', f'opt_{v}')
        orig_sz = os.path.getsize(input_path)
        
        cmd = [
            exe, '-y',
            '-i', input_path,
            '-an',
            '-c:v', 'libx264',
            '-crf', '24',
            '-preset', 'slow',
            '-movflags', '+faststart',
            temp_path
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if res.returncode == 0 and os.path.exists(temp_path):
            opt_sz = os.path.getsize(temp_path)
            time.sleep(0.5)
            try:
                os.remove(input_path)
            except Exception as e:
                print(f"Warning removing {input_path}: {e}")
            os.replace(temp_path, input_path)
            pct = (orig_sz - opt_sz) / orig_sz * 100
            print(f"  {v:15}: {orig_sz/1024/1024:.2f} MB -> {opt_sz/1024/1024:.2f} MB (-{pct:.1f}%)")
        else:
            print(f"  Error optimizing {v}:", res.stderr.decode(errors='ignore'))
            if os.path.exists(temp_path):
                os.remove(temp_path)

def optimize_images():
    print("\n=== OPTIMIZING PRODUCT IMAGES ===")
    prod_dir = os.path.join('public', 'products')
    total_orig = 0
    total_opt = 0
    for f in os.listdir(prod_dir):
        if f.endswith('.png') and not f.endswith('.opt.png'):
            p = os.path.join(prod_dir, f)
            orig_sz = os.path.getsize(p)
            total_orig += orig_sz
            
            # Save WebP version at high quality
            im = Image.open(p)
            webp_path = os.path.join(prod_dir, f.replace('.png', '.webp'))
            im.save(webp_path, 'WEBP', quality=94, method=5)
            
            # Optimize existing PNG in-place
            temp_png = p + '.opt'
            im.save(temp_png, 'PNG', optimize=True, compress_level=9)
            if os.path.exists(temp_png) and os.path.getsize(temp_png) <= orig_sz:
                os.replace(temp_png, p)
            elif os.path.exists(temp_png):
                os.remove(temp_png)
                
            webp_sz = os.path.getsize(webp_path)
            total_opt += webp_sz
            pct = (orig_sz - webp_sz) / orig_sz * 100
            print(f"  {f:22}: {orig_sz/1024:.1f} KB -> WebP: {webp_sz/1024:.1f} KB (-{pct:.1f}%)")
            
    print(f"Total Products: {total_orig/1024/1024:.2f} MB -> WebP: {total_opt/1024/1024:.2f} MB (-{(total_orig-total_opt)/total_orig*100:.1f}%)")

def optimize_logos():
    print("\n=== OPTIMIZING LOGOS ===")
    for logo in ['logo.png', 'logo-white.png']:
        p = os.path.join('public', logo)
        if os.path.exists(p):
            orig_sz = os.path.getsize(p)
            im = Image.open(p)
            temp = p + '.opt'
            im.save(temp, 'PNG', optimize=True, compress_level=9)
            if os.path.exists(temp) and os.path.getsize(temp) <= orig_sz:
                os.replace(temp, p)
            elif os.path.exists(temp):
                os.remove(temp)
            new_sz = os.path.getsize(p)
            print(f"  {logo:18}: {orig_sz/1024:.1f} KB -> {new_sz/1024:.1f} KB")

if __name__ == '__main__':
    optimize_videos()
    optimize_images()
    optimize_logos()
    print("\nOptimization completed successfully!")
