import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import impactHubLogo from '../assets/impact_hub_logo_new.png';
import impactHubTeam from '../assets/IMG_0053Bootcamp.jpg';
import programYes from '../assets/program_yes_3.jpg';
import programLaunchpad from '../assets/IMG_6355.jpg';
import programGlip from '../assets/female_nysc_intern.png';
import programEap from '../assets/program_eap_new.jpg';
import programAwards from '../assets/program_awards_new.jpg';

const Zap = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const programs = [
  {
    title: 'Y.E.S Program',
    subtitle: 'Young Entrepreneurs and Innovators SWITCH',
    desc: 'An innovative approach targeting high school students (ages 12-16) to become global changemakers. 22-week program in Leadership, Entrepreneurship, Innovation, SDGs, and Technology.',
    target: 'Our Audience comprises young adults in their senior year in private and public secondary schools across different states in Nigeria, and other developing countries across Africa, with an emphasis on students in underserved communities. Our beneficiaries are expected to be within the ages 12-16, in order to fit into the age appropriate curriculum developed for this purpose.',
    icon: <Users size={28} className="text-primary" />,
    image: programYes,
    links: [
      { label: 'For Schools', url: 'https://rebrand.ly/YES-for-Schools' },
      { label: 'For Volunteers', url: 'https://rebrand.ly/YES-Volunteers-' },
      { label: 'For Mentors', url: 'https://rebrand.ly/volunteer-mentorship2025' }
    ]
  },
  {
    title: 'Launchpad Bootcamp',
    subtitle: 'Intensive Teen Training',
    desc: 'An intensive 1-week program designed to equip teenagers with practical skills in problem solving, critical thinking, and entrepreneurship. Participants learn how to identify real-world problems and build solutions that create impact.',
    target: 'Teenagers interested in entrepreneurship and creating change.',
    icon: <Zap size={28} className="text-secondary" />,
    image: programLaunchpad,
    links: []
  },
  {
    title: 'GLIP',
    subtitle: 'Global Leaders Internship Program',
    desc: 'The GLIP is an internship opportunity for young individuals (particularly young adults undergoing their National Youth service program) interested in learning and growing in the development sector. Interns are given an opportunity to learn from established development leaders, hone skills in programs management, project management, fundraising, communications amongst others, and also given an opportunity to serve as mentors for our young entrepreneurs SWITCH club.',
    target: 'Graduates interested in project management, communications, and social media.',
    icon: <GraduationCap size={28} className="text-accent" />,
    image: programGlip,
    links: [{ label: 'Apply Now', url: 'https://lnkd.in/dA-46xc9' }]
  },
  {
    title: 'EAP',
    subtitle: 'Entrepreneurs Accelerator Program',
    desc: 'The Enterprise Accelerator Program (EAP) is a structured, 12-week virtual program designed and delivered by STRETCH Impact Hub. It is built for revenue-generating businesses in the 1 to 5-year stage that are ready to move beyond survival mode and build the internal systems required to grow sustainably, attract partnerships, and access investment or donor funding. The program is delivered in sector-specific cohorts of 15 to 20 business owners, with one industry focus per cycle. Each cohort progresses through three consecutive phases that mirror the Solutions Lab\'s core pillars: Clarity, Structure, and Execution.',
    target: 'Revenue-generating SMEs and social enterprises.',
    icon: <BookOpen size={28} className="text-primary" />,
    image: programEap,
    links: [{ label: 'Apply', url: '#' }]
  },
  {
    title: 'Impact Awards',
    subtitle: 'Annual Flagship Initiative',
    desc: 'The STRETCH IMPACT AWARDS is an annual flagship initiative designed to celebrate and honor young changemakers who are driving positive transformation in their sector entrepreneurship, and innovation. This program highlights outstanding individuals who exemplify innovation, resilience, leadership, possibility mindset and teamwork—core values that define the spirit of STRETCH international and its programs. Beyond recognizing exceptional young changemakers, this event also serves as a platform to showcase the remarkable impact of STRETCH International in empowering youth for the future of work. It is an opportunity to appreciate the dedication of our staff, volunteers, sponsors, and partners, whose contributions make our mission possible.',
    target: 'Young changemakers, staff, volunteers, and partners.',
    icon: <Award size={28} className="text-secondary" />,
    image: programAwards,
    links: [{ label: 'Nominate', url: '#' }]
  }
];

const ImpactHub = () => {
  return (
    <div className="pt-20">
      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[700px]">
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img 
              src={impactHubTeam} 
              alt="The next generation of African changemakers" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-primary flex flex-col justify-center p-12 lg:p-24 text-white relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1] font-serif italic">Stretch Impact Hub</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                Through our innovative programs, we equip young people with knowledge, skills, mentorship opportunities, and platforms to think critically, see problems and create solutions to them, turn their solutions into profitable and sustainable businesses, and become employers of labour, thereby promoting economic growth, and eradicating poverty.
              </p>
            </motion.div>
            <div className="absolute right-0 bottom-0 opacity-10 scale-125 rotate-12 -translate-x-10 translate-y-10">
              <Users size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats / Programs Intro */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container-wide text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-secondary leading-tight max-w-4xl mx-auto"
          >
            Since 2020, we have reached <span className="text-primary italic font-serif">5,000+ young people</span> in 7 states across Nigeria through:
          </motion.h2>
        </div>
      </section>

      {/* Programs Sections (Split-Layout Concept) */}
      {programs.map((prog, i) => {
        const isEven = i % 2 === 0;
        const bgClass = isEven ? 'bg-primary' : 'bg-secondary';
        
        return (
          <section key={i} className="relative overflow-hidden bg-white border-b border-slate-100">
            <div className="grid lg:grid-cols-2 items-stretch min-h-[600px]">
              {/* Image Column */}
              <div className={`relative h-[350px] lg:h-auto overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Text Column */}
              <div className={`${bgClass} flex flex-col justify-center p-12 lg:p-20 text-white relative ${!isEven ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                      {React.cloneElement(prog.icon, { className: 'text-white', size: 28 })}
                    </div>
                    <div>
                      <h4 className="text-white/80 font-bold tracking-[0.2em] text-xs uppercase">{prog.subtitle}</h4>
                      <h3 className="text-3xl md:text-4xl font-black font-serif italic mt-1">{prog.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-white/90 leading-relaxed font-medium mb-8">
                    {prog.desc}
                  </p>
                  
                  <div className="mb-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                    <h5 className="font-bold text-white mb-2 text-xs uppercase tracking-widest">Target Audience</h5>
                    <p className="text-white/80 font-medium text-sm">{prog.target}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 relative z-20">
                    {prog.links.map((link, j) => (
                      <a 
                        key={j} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn bg-white text-secondary px-8 py-3.5 text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-all shadow-xl shadow-black/10"
                      >
                        {link.label} <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </motion.div>
                
                {/* Subtle Decorative Background Icon */}
                <div className="absolute right-0 bottom-0 opacity-[0.03] scale-125 rotate-12 -translate-x-10 translate-y-10 pointer-events-none">
                  {React.cloneElement(prog.icon, { className: 'text-white', size: 300 })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Get Involved CTA */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Ready to join our <span className="text-primary italic font-serif">impact</span>?</h2>
          <p className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Whether you're a school, volunteer, facilitator, or mentor, there's a place for you at STRETCH.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://rebrand.ly/YES-Volunteers-" className="btn btn-primary px-12 py-5 text-xl">Volunteer Now</a>
            <a href="mailto:stretchbeyondlimits@gmail.com" className="btn bg-white/10 backdrop-blur-md border border-white/20 px-12 py-5 text-xl text-white hover:bg-white/20">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactHub;
