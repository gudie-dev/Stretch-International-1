import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import stretchLogo from '../assets/stretch_logo.png';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/stretchinternational/' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/stretch_international?igsh=bTdjaTFzMm13NzZl' },
    { Icon: FacebookIcon, href: 'https://www.facebook.com/share/1DgiFhxSm6/' },
    { Icon: TwitterIcon, href: 'https://x.com/StretchI74482' }
  ];

  return (
    <footer className="bg-secondary text-white pt-32 pb-10 border-t border-white/5">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>

          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Empowering Africa's next generation of changemakers. We see NO IMPOSSIBILITIES!
          </p>
          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/10"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </div>


        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-primary mb-10">Quick Links</h4>
          <ul className="space-y-6">
            {[
              { name: 'Home', href: '/' },
              { name: 'Impact Hub', href: '/impact-hub' },
              { name: 'Solutions Lab', href: '/solutions-lab' },
              { name: 'About Us', href: '/about' },
              { name: 'Join Us', href: '/join' },
              { name: 'Contact Us', href: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-slate-400 hover:text-white transition-all text-lg hover:translate-x-2 inline-block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-primary mb-10">Contact Us</h4>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <a href="tel:+2347073226280" className="text-slate-400 hover:text-white transition-colors text-lg">
                +234 707 322 6280
              </a>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <a href="mailto:stretchbeyondlimits@gmail.com" className="text-slate-400 hover:text-white transition-colors text-lg break-all">
                stretchbeyondlimits@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <span className="text-slate-400 text-lg">Bodija, Ibadan, Nigeria</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-primary mb-10">Newsletter</h4>
          <p className="font-serif italic text-2xl text-white mb-6 leading-tight">Stay Connected to the Impact</p>
          <form className="flex flex-col gap-5">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-white outline-none"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary text-white outline-none"
            />
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="consent"
                required
                className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" 
              />
              <label htmlFor="consent" className="text-xs text-slate-500 leading-tight cursor-pointer">
                I accept the terms and conditions and consent to receive email updates from STRETCH International
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-full py-4 mt-2 shadow-primary/20">Subscribe Now</button>
          </form>
        </div>
      </div>
      
      <div className="container-wide pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} STRETCH International. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
