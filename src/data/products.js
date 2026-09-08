export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'audio', name: 'Premium Audio' },
  { id: 'laptops', name: 'Laptops & Workstations' },
  { id: 'mobile', name: 'Mobile & Spatial' },
  { id: 'accessories', name: 'Precision Accessories' }
];

export const products = [
  {
    id: 'tn-headphones-01',
    headline: 'TechNest Studio',
    tagline: 'Space Audio Series. Pure acoustic mastery.',
    availability: 'Available now • From $180',
    theme: 'theme-sky',
    name: 'TechNest Studio Wireless Headphones',
    subtitle: 'Space Audio Series • ANC 2.0',
    category: 'audio',
    price: 180.00,
    originalPrice: 240.00,
    rating: 4.9,
    reviewsCount: 120,
    badge: 'Featured in Video',
    inStock: true,
    leadTime: 'Same day dispatch',
    image: '/products/headset.webp',
    gallery: [
      '/products/headset.webp',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1C1E' },
      { name: 'Matte Silver', hex: '#D1D5DB' },
      { name: 'Champagne Gold', hex: '#E5D3B3' }
    ],
    description: 'Precision-engineered over-ear acoustic headphones with active noise cancellation, custom high-excursion dynamic drivers, and ultra-soft memory foam earcups.',
    specs: [
      { label: 'Active Noise Cancellation', value: 'Hybrid ANC with Smart Transparency' },
      { label: 'Battery Life', value: 'Up to 40 hours (30h with ANC on)' },
      { label: 'Fast Charge', value: '10 min charge gives 5 hours playtime' },
      { label: 'Connectivity', value: 'Bluetooth 5.4 Multi-point + 3.5mm lossless' },
      { label: 'Microphones', value: '6-mic array with beamforming speech isolate' },
      { label: 'Weight', value: '254 grams' }
    ],
    features: [
      'Over-the-ear comfort memory foam cushions',
      'Custom 40mm titanium diaphragm acoustic drivers',
      'Lossless 24-bit/96kHz high-resolution audio decoding',
      'Full physical tactile controls with rotary volume crown',
      'Official 2-Year TechNest Global Warranty'
    ]
  },
  {
    id: 'tn-laptop-pro-16',
    headline: 'UltraBook Pro 16',
    tagline: 'Now supercharged by M-Series Silicon.',
    availability: 'Ships tomorrow • From $1,899',
    theme: 'theme-light',
    name: 'TechNest UltraBook Pro 16',
    subtitle: 'M-Series Max Silicon • 3.2K Liquid XDR',
    category: 'laptops',
    price: 1899.00,
    originalPrice: 2099.00,
    rating: 5.0,
    reviewsCount: 84,
    badge: 'Pro Tier',
    inStock: true,
    leadTime: 'Free Express Delivery',
    image: '/products/mac.webp',
    gallery: [
      '/products/mac.webp',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Silver Lunar', hex: '#E5E7EB' }
    ],
    description: 'The pinnacle of portable computational mastery. Packed with high-throughput neural accelerators, edge-to-edge 120Hz ProMotion XDR display, and 22-hour battery life.',
    specs: [
      { label: 'Processor', value: '16-Core CPU + 40-Core GPU Neural Chip' },
      { label: 'Memory', value: '36GB Unified Ultra-Bandwidth RAM' },
      { label: 'Storage', value: '1TB PCIe 4.0 NVMe SSD (up to 7.4 GB/s)' },
      { label: 'Display', value: '16.2" Mini-LED Liquid XDR (1600 nits peak)' },
      { label: 'Ports', value: '3x Thunderbolt 5, HDMI 2.1, SDXC, MagSafe 3' }
    ],
    features: [
      '120Hz adaptive ProMotion refresh rate',
      'Studio-grade 6-speaker spatial sound system',
      'Whisper-quiet dual high-efficiency centrifugal fans',
      'Backlit Magic Keyboard with Touch ID biometric security'
    ]
  },
  {
    id: 'tn-macbook-air-m3',
    headline: 'MacBook Air',
    tagline: 'Lean. Mean. M3 machine.',
    availability: 'Available now • From $1,099',
    theme: 'theme-light',
    name: 'TechNest MacBook Air M3',
    subtitle: '13.6-inch Liquid Retina • Ultra-Thin 11.3mm',
    category: 'laptops',
    price: 1099.00,
    originalPrice: 1249.00,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Ultralight Flagship',
    inStock: true,
    leadTime: 'Same day dispatch',
    image: '/products/macbook-air.webp',
    gallery: [
      '/products/macbook-air.webp',
      '/products/mac.webp'
    ],
    colors: [
      { name: 'Midnight', hex: '#1E293B' },
      { name: 'Starlight', hex: '#F1EBD9' },
      { name: 'Space Gray', hex: '#64748B' },
      { name: 'Silver', hex: '#E2E8F0' }
    ],
    description: 'Strikingly thin and fast, MacBook Air sails through work and play. An all-aluminum unibody design built to last, with up to 18 hours of battery life and support for up to two external displays.',
    specs: [
      { label: 'Processor', value: 'Apple M3 chip with 8-Core CPU and 10-Core GPU' },
      { label: 'Memory', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB High-Speed SSD' },
      { label: 'Display', value: '13.6-inch Liquid Retina display with True Tone' },
      { label: 'Weight', value: '1.24 kg (2.7 pounds)' }
    ],
    features: [
      'MagSafe 3 charging port with color-matched woven cable',
      '1080p FaceTime HD camera with computational video',
      'Three-mic array with directional beamforming',
      'Four-speaker sound system with Spatial Audio'
    ]
  },
  {
    id: 'tn-apple-vision-pro',
    headline: 'Apple Vision Pro',
    tagline: 'Welcome to the era of spatial computing.',
    availability: 'Available now • From $3,499',
    theme: 'theme-cyan',
    name: 'TechNest Apple Vision Pro',
    subtitle: 'Dual 4K Micro-OLED • R1 Real-Time Processing',
    category: 'mobile',
    price: 3499.00,
    originalPrice: 3699.00,
    rating: 5.0,
    reviewsCount: 64,
    badge: 'Spatial Computing',
    inStock: true,
    leadTime: 'Personalized Concierge Delivery',
    image: '/products/apple-vision-pro.webp',
    gallery: [
      '/products/apple-vision-pro.webp'
    ],
    colors: [
      { name: 'Titanium & Glass', hex: '#94A3B8' }
    ],
    description: 'Apple Vision Pro seamlessly blends digital content with your physical space. You navigate simply by using your eyes, hands, and voice, transforming how you work, watch, relive memories, and connect.',
    specs: [
      { label: 'Display System', value: '23 million pixels across dual 4K micro-OLED displays' },
      { label: 'Dual-Chip Architecture', value: 'M2 chip for computing + R1 chip for real-time sensor processing' },
      { label: 'Audio', value: 'Spatial Audio system with dual-driver audio pods' },
      { label: 'Sensors', value: 'High-resolution eye tracking, LiDAR scanner, TrueDepth camera' }
    ],
    features: [
      'Infinite canvas for work apps and 3D multitasking',
      'Immersive Spatial Cinema with 100-foot virtual screen',
      'Intuitive eye, hand, and voice gesture navigation',
      'EyeSight exterior OLED reveals your eyes to others'
    ]
  },
  {
    id: 'tn-iphone-18-pro-max',
    headline: 'iPhone 18 Pro Max',
    tagline: 'Quantum Neural Engine. Optical supremacy.',
    availability: 'Pre-order now • From $1,199',
    theme: 'theme-dark',
    name: 'TechNest iPhone 18 Pro Max',
    subtitle: '6.9" Super Retina XDR • 2nm Neural Bionic',
    category: 'mobile',
    price: 1199.00,
    originalPrice: 1299.00,
    rating: 5.0,
    reviewsCount: 158,
    badge: 'Next-Gen Flagship',
    inStock: true,
    leadTime: 'Priority Pre-Order Dispatch',
    image: '/products/iphone-18-pro-max.webp',
    gallery: [
      '/products/iphone-18-pro-max.webp',
      '/products/iphone.webp'
    ],
    colors: [
      { name: 'Cosmic Titanium', hex: '#1E1E24' },
      { name: 'Liquid Platinum', hex: '#E2E8F0' },
      { name: 'Aurora Gold', hex: '#D4AF37' }
    ],
    description: 'Forged from monolithic Grade 5 aerotitanium. Powered by our quantum 2nm Neural Bionic processor, quad-periscope optical array with 10x lossless zoom, and edge-to-edge 2000-nit ProMotion XDR.',
    specs: [
      { label: 'Processor', value: 'A19 Pro 2nm Quantum Neural Bionic' },
      { label: 'Display', value: '6.9" Super Retina XDR 120Hz ProMotion (2600 nits)' },
      { label: 'Optics', value: '48MP Quad-Pixel + 10x Tetraprism Periscope + 48MP Ultrawide' },
      { label: 'Chassis', value: 'Grade 5 Aerospace Titanium with Matte Ceramic Shield' }
    ],
    features: [
      'Next-generation haptic Camera Control with pressure-sensing capture',
      'Cinematic 8K 60fps ProRes Log recording directly to external SSD',
      'Satellite SOS and sub-millisecond offline neural intelligence'
    ]
  },
  {
    id: 'tn-tablet-air-pro',
    headline: 'Pad Ultra 13',
    tagline: 'Thinner than ever. Tandem OLED creative canvas.',
    availability: 'Available now • From $799',
    theme: 'theme-cyan',
    name: 'TechNest Pad Ultra 13',
    subtitle: 'Ultra-Thin 5.1mm • Tandem OLED',
    category: 'mobile',
    price: 799.00,
    originalPrice: 899.00,
    rating: 4.8,
    reviewsCount: 68,
    badge: 'Editor Pick',
    inStock: true,
    leadTime: 'In Stock',
    image: '/products/ipad.webp',
    gallery: [
      '/products/ipad.webp'
    ],
    colors: [
      { name: 'Space Black', hex: '#262626' },
      { name: 'Starlight Silver', hex: '#E7E5E4' }
    ],
    description: 'The thinnest portable creative canvas ever conceived. An astonishing 5.1mm profile with breakthrough dual-layer Tandem OLED color accuracy.',
    specs: [
      { label: 'Thickness', value: '5.1 mm' },
      { label: 'Display', value: '13" Ultra Retina XDR Tandem OLED' },
      { label: 'Pencil Support', value: 'Haptic magnetic styler with barrel roll' }
    ],
    features: [
      'Quad speakers with rich acoustic spatial bass',
      'Full desktop-grade multitasking interface',
      'Thunderbolt / USB 4 high-speed data transfer'
    ]
  },
  {
    id: 'tn-phone-titanium-16',
    headline: 'Phone 16 Pro',
    tagline: 'Forged in Titanium. Next-gen periscope optics.',
    availability: 'In stock • From $999',
    theme: 'theme-warm',
    name: 'TechNest Phone 16 Pro Titanium',
    subtitle: 'Grade 5 Titanium • Periscope Zoom 5x',
    category: 'mobile',
    price: 999.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Flagship',
    inStock: true,
    leadTime: 'Ships tomorrow',
    image: '/products/iphone.webp',
    gallery: [
      '/products/iphone.webp'
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#9CA3AF' },
      { name: 'Black Titanium', hex: '#1F2937' },
      { name: 'Desert Gold', hex: '#D7C4A5' }
    ],
    description: 'Precision forged in sculpted aerospace-grade titanium. Features our industry-leading optical zoom sensor, always-on Super Retina display, and programmable Action Button.',
    specs: [
      { label: 'Chassis', value: 'Grade 5 Titanium with textured matte glass' },
      { label: 'Camera', value: '48MP Main + 48MP Ultra Wide + 5x Telephoto' },
      { label: 'Screen', value: '6.7" Ceramic Shield 120Hz LTPO' },
      { label: 'Storage', value: '256GB / 512GB / 1TB' }
    ],
    features: [
      'Customizable Action Button and haptic camera shutter',
      'Cinematic 4K 120fps Dolby Vision video recording',
      'All-day battery life with 35W fast wireless charging'
    ]
  },
  {
    id: 'tn-audio-earbuds-pro',
    headline: 'Pods Pro 2',
    tagline: 'Lossless spatial audio. 2x more active cancellation.',
    availability: 'Same day dispatch • From $169',
    theme: 'theme-sky',
    name: 'TechNest Pods Pro Gen 2',
    subtitle: 'Lossless Spatial Audio • MagSafe Case',
    category: 'audio',
    price: 169.00,
    originalPrice: 199.00,
    rating: 4.9,
    reviewsCount: 97,
    badge: 'Best Seller',
    inStock: true,
    leadTime: 'Same day dispatch',
    image: '/products/airpods.webp',
    gallery: [
      '/products/airpods.webp'
    ],
    colors: [
      { name: 'Ceramic White', hex: '#F9FAFB' },
      { name: 'Matte Onyx', hex: '#111827' }
    ],
    description: 'Next-level acoustic immersion with intelligent adaptive noise cancellation, adaptive audio transparency, and 30 hours of playback with the wireless MagSafe case.',
    specs: [
      { label: 'Drivers', value: 'Custom low-distortion high-amplitude dynamic' },
      { label: 'ANC', value: '2x more active cancellation than Gen 1' },
      { label: 'Resistance', value: 'IP54 dust, sweat, and water resistant' }
    ],
    features: [
      'Personalized spatial audio with dynamic head tracking',
      'Touch swipe stem controls for seamless volume adjustment',
      'Precision Finding speaker in case'
    ]
  },
  {
    id: 'tn-accessory-apex-keyboard',
    headline: 'Apex Keyboard',
    tagline: 'Low profile. CNC aluminum tactile craftsmanship.',
    availability: 'In stock • From $149',
    theme: 'theme-dark',
    name: 'TechNest Apex Mechanical Keyboard',
    subtitle: 'Low Profile • PBT Keycaps • Multi-Host',
    category: 'accessories',
    price: 149.00,
    originalPrice: 179.00,
    rating: 4.9,
    reviewsCount: 78,
    badge: 'Crafted for Pros',
    inStock: true,
    leadTime: 'In Stock',
    image: '/products/keyboard.webp',
    gallery: [
      '/products/keyboard.webp'
    ],
    colors: [
      { name: 'Graphite Black', hex: '#1E293B' },
      { name: 'Silver White', hex: '#E2E8F0' }
    ],
    description: 'Ultra-slim CNC aluminum mechanical masterpiece with factory-lubed tactile switches, warm ambient backlight, and instant switching across 3 devices.',
    specs: [
      { label: 'Switches', value: 'Gateron Low-Profile 2.0 Tactile' },
      { label: 'Connectivity', value: 'Bluetooth 5.3 + 2.4G Wireless + USB-C' },
      { label: 'Battery', value: '4000mAh (up to 200 hours backlight off)' }
    ],
    features: [
      'Hot-swappable switch sockets',
      'Custom sound-dampening silicone foam layer',
      'Compatible with macOS, Windows, iOS & Android'
    ]
  },
  {
    id: 'tn-accessory-precision-mouse',
    headline: 'Precision Mouse',
    tagline: 'Electromagnetic MagSpeed. Silent haptics.',
    availability: 'In stock • From $79',
    theme: 'theme-light',
    name: 'TechNest Ergonomic Precision Mouse',
    subtitle: 'Dual Optical 8K Sensor • Silent Haptics',
    category: 'accessories',
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.8,
    reviewsCount: 63,
    badge: 'Ergonomic',
    inStock: true,
    leadTime: 'In Stock',
    image: '/products/mouse.webp',
    gallery: [
      '/products/mouse.webp'
    ],
    colors: [
      { name: 'Matte Space Gray', hex: '#334155' },
      { name: 'Pale Stone', hex: '#F1F5F9' }
    ],
    description: 'Sculpted to match the natural contours of the human hand. Featuring electromagnetic MagSpeed scrolling, 8,000 DPI sensor tracking on any glass surface.',
    specs: [
      { label: 'DPI Range', value: '200 to 8,000 DPI' },
      { label: 'Buttons', value: '7 programmable buttons + gesture button' },
      { label: 'Recharge', value: 'USB-C quick charge (3 hours in 1 min)' }
    ],
    features: [
      '90% quieter clicks with tactile feedback',
      'Custom thumb scroll wheel for horizontal navigation',
      'Flow cross-computer seamless file and cursor sharing'
    ]
  },
  {
    id: 'tn-accessory-magstand',
    headline: 'MagStand Trio',
    tagline: 'Snap and fast-charge. Sculpted billet aluminum.',
    availability: 'In stock • From $89',
    theme: 'theme-sky',
    name: 'TechNest 3-in-1 MagStand Trio',
    subtitle: '15W Fast Qi2 • Billet Aluminum',
    category: 'accessories',
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviewsCount: 52,
    badge: 'Desk Essential',
    inStock: true,
    leadTime: 'In Stock',
    image: '/products/stand.webp',
    gallery: [
      '/products/stand.webp'
    ],
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Pure White', hex: '#F3F4F6' }
    ],
    description: 'A single minimalist monolith to power your entire mobile ecosystem. Charges phone, smartwatch, and wireless earbuds simultaneously with official 15W Qi2 speed.',
    specs: [
      { label: 'Power Output', value: '15W Phone + 5W Watch + 5W Buds' },
      { label: 'Material', value: 'CNC Aircraft-Grade Aluminum & Soft Silicone' },
      { label: 'Power Input', value: 'USB-C (Includes 30W braided cable)' }
    ],
    features: [
      'Strong N52 neodymium magnetic alignment',
      'Rotates between landscape StandBy mode and portrait',
      'Weighted base prevents sliding or lifting'
    ]
  },
  {
    id: 'tn-accessory-gan-charger',
    headline: '140W GaN Fast Trio',
    tagline: '140W powerhouse. 40% more compact.',
    availability: 'In stock • From $59',
    theme: 'theme-cyan',
    name: 'TechNest 140W GaN Fast Charger Trio',
    subtitle: 'Dual USB-C PD 3.1 + USB-A • Foldable Pins',
    category: 'accessories',
    price: 59.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 89,
    badge: 'Powerhouse',
    inStock: true,
    leadTime: 'In Stock',
    image: '/products/charger.webp',
    gallery: [
      '/products/charger.webp'
    ],
    colors: [
      { name: 'Matte White', hex: '#F8FAFC' },
      { name: 'Onyx Black', hex: '#0F172A' }
    ],
    description: 'Next-generation Gallium Nitride (GaN) architecture delivers 140W max output in a casing 40% smaller than conventional power bricks. Easily fast-charges a 16" laptop and phone simultaneously.',
    specs: [
      { label: 'Max Output', value: '140W (Single USB-C PD 3.1)' },
      { label: 'Ports', value: '2x USB-C (140W/100W) + 1x USB-A (22.5W)' },
      { label: 'Technology', value: 'GaNFast III with Active Thermal Shield' }
    ],
    features: [
      'Charge laptop from 0% to 50% in just 28 minutes',
      'Universal voltage 100V-240V for international travel',
      'Real-time temperature monitoring at 3,000,000 times/day'
    ]
  }
];
