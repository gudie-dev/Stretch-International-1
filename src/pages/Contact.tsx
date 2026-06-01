import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar, ExternalLink, Users, Send, CheckCircle2 } from 'lucide-react';

// Custom inline SVG icons for social channels (due to Lucide deprecating brand icons)
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} style={props.style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} style={props.style}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.24-.24v6.17a7.714 7.714 0 0 1-5.11 7.27 7.79 7.79 0 0 1-7.96-1.57A7.72 7.72 0 0 1 3.02 12.78a7.72 7.72 0 0 1 6.13-7.61v4.09c-1.19.26-2.22.98-2.78 2.05a3.73 3.73 0 0 0 2.22 5.24c1.46.42 3.12-.13 3.86-1.45.14-.26.21-.55.23-.85L12.71 0l-.185.02z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const contactChannels = [
    {
      title: 'General Enquiries',
      desc: 'Got questions about our bootcamps, workshops, or outreach programs?',
      icon: <Phone size={24} className="text-primary" />,
      actionText: '+234 707 322 6280',
      actionLink: 'tel:+2347073226280',
      actionText2: 'stretchbeyondlimits@gmail.com',
      actionLink2: 'mailto:stretchbeyondlimits@gmail.com',
      color: 'bg-primary/5 hover:bg-primary/10 border-primary/20'
    },
    {
      title: 'Solutions Lab Consultation',
      desc: 'Ready to scale your business with professional consultation, fundraising, and strategy?',
      icon: <Calendar size={24} className="text-secondary" />,
      actionText: 'Book Business Consultation',
      actionLink: 'https://rebrand.ly/solutions-consultation',
      actionText2: 'stretchsolutionslab@gmail.com',
      actionLink2: 'mailto:stretchsolutionslab@gmail.com',
      color: 'bg-secondary/5 hover:bg-secondary/10 border-secondary/20'
    },
    {
      title: 'Our Location',
      desc: 'Based in Nigeria’s academic and development hub, empowering growth nationwide.',
      icon: <MapPin size={24} className="text-emerald-500" />,
      actionText: 'Bodija, Ibadan, Nigeria',
      actionLink: '#',
      color: 'bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  const socialChannels = [
    {
      name: 'LinkedIn Company Page',
      desc: 'STRETCH International official page',
      url: 'https://www.linkedin.com/company/stretchinternational/',
      icon: <LinkedinIcon className="w-6 h-6" />,
      color: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
    },
    {
      name: 'Solutions Lab Showcase',
      desc: 'Stretch Solutions Lab business portal',
      url: 'https://www.linkedin.com/showcase/stretch-solutions-lab/',
      icon: <LinkedinIcon className="w-6 h-6" />,
      color: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-500/20'
    },
    {
      name: 'Instagram Profile',
      desc: '@stretch_international',
      url: 'https://www.instagram.com/stretch_international?igsh=bTdjaTFzMm13NzZl',
      icon: <InstagramIcon className="w-6 h-6" />,
      color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white shadow-pink-500/20'
    },
    {
      name: 'Facebook Page',
      desc: 'Stretch International official timeline',
      url: 'https://www.facebook.com/share/1DgiFhxSm6/',
      icon: <FacebookIcon className="w-6 h-6" />,
      color: 'bg-blue-700 hover:bg-blue-800 text-white shadow-blue-600/20'
    },
    {
      name: 'Facebook Community',
      desc: 'Join our interactive discussion forum',
      url: 'https://www.facebook.com/groups/917203784427384/?ref=share&mibextid=NSMWBT',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-500/20'
    },
    {
      name: 'X (formerly Twitter)',
      desc: '@StretchI74482',
      url: 'https://x.com/StretchI74482',
      icon: <TwitterIcon className="w-6 h-6" />,
      color: 'bg-slate-900 hover:bg-black text-white shadow-slate-900/20'
    },
    {
      name: 'TikTok Channel',
      desc: '@stretch.int',
      url: 'https://www.tiktok.com/@stretch.int?_r=1&_t=ZS-94DMdGZYPFX',
      icon: <TiktokIcon className="w-6 h-6" />,
      color: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-8xl font-black text-secondary mb-8 font-serif italic">Contact Us</h1>
            <p className="text-2xl text-slate-500 leading-relaxed font-medium">
              We are here to support your growth, answer your queries, and build strategic partnerships. Let’s connect today.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid lg:grid-cols-3 gap-10 mb-32">
            {contactChannels.map((channel, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className={`p-10 rounded-[40px] border flex flex-col justify-between shadow-sm transition-all duration-300 ${channel.color}`}
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 border border-slate-100">
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary mb-4">{channel.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{channel.desc}</p>
                </div>
                <div className="space-y-4">
                  {channel.actionLink && (
                    <a
                      href={channel.actionLink}
                      target={channel.actionLink.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors text-lg"
                    >
                      {channel.actionText} {channel.actionLink.startsWith('http') && <ExternalLink size={18} />}
                    </a>
                  )}
                  {channel.actionLink2 && (
                    <a
                      href={channel.actionLink2}
                      className="block font-bold text-slate-600 hover:text-primary transition-colors text-sm break-all"
                    >
                      {channel.actionText2}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-stretch mb-32">
            {/* Left: Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-[50px] p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              
              <div className="mb-10">
                <span className="text-primary font-bold uppercase tracking-wider text-xs block mb-4">Send A Message</span>
                <h3 className="text-4xl font-black text-secondary mb-4">How can we help you?</h3>
                <p className="text-slate-500 text-sm font-medium">Leave us a message, and our execution team will respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest pl-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-6 py-4 text-secondary outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-widest pl-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-6 py-4 text-secondary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest pl-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is your enquiry about?"
                    className="bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-6 py-4 text-secondary outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest pl-2">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message details here..."
                    className="bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-6 py-4 text-secondary outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-5 text-lg font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-3"
                >
                  Send Message <Send size={18} />
                </button>
              </form>

              {/* Form Success Popup */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-6 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-[40px] flex flex-col items-center justify-center text-center p-8 z-30 shadow-2xl"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 size={44} />
                    </div>
                    <h4 className="text-3xl font-black text-secondary mb-3">Message Sent!</h4>
                    <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-medium">
                      Thank you for reaching out, <span className="font-bold text-secondary">{formData.name}</span>. Our team has received your message and will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Connect With Us Online Column */}
            <div className="lg:col-span-5 bg-secondary text-white rounded-[50px] p-10 md:p-16 flex flex-col justify-between relative overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-slate-900 -z-10" />
              <div className="absolute top-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
              
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-4">Connect With Us Online</span>
                <h3 className="text-4xl font-black mb-6 font-serif italic">Our Social Hub</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-sm font-medium">
                  Follow our visual journey, check corporate updates, read articles, or participate in the discussion in our communities.
                </p>
              </div>

              {/* Scrolling Social list */}
              <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {socialChannels.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 bg-white/5 border border-white/10 hover:border-white/20 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 bg-white/10 text-white">
                      {social.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors">{social.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{social.desc}</p>
                    </div>
                    <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
