import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

export default function QuickFeatures() {
  const features = [
    {
      icon: <Truck size={20} />,
      title: 'Free Express Shipping',
      desc: 'Dispatched within 24 hours on orders over $100'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Official 2-Year Warranty',
      desc: 'Complete factory coverage on all hardware'
    },
    {
      icon: <RefreshCw size={20} />,
      title: '30-Day Risk-Free Trial',
      desc: 'Love your gear or return it for a full refund'
    },
    {
      icon: <Headphones size={20} />,
      title: 'Dedicated VIP Support',
      desc: 'Direct access to our audio & hardware engineers'
    }
  ];

  return (
    <section className="features-banner">
      <div className="container">
        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-box">
                {item.icon}
              </div>
              <div>
                <h4 className="feature-title">{item.title}</h4>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
