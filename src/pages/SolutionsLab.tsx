import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Globe, ShieldCheck, Users2, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

import bookkeepingGuide from '../assets/bookkeeping_guide.png';
import solutionsLabTeam from '../assets/solutions_lab_team_v3.png';

const services = [
  {
    title: 'Enterprise Support and Business Development',
    desc: 'We strengthen business foundations and help organizations operate with clarity and structure',
    icon: <Briefcase size={28} />
  },
  {
    title: 'Financial and Administrative Support',
    desc: 'We help businesses and nonprofits stay accountable, structured, and investor-ready.',
    icon: <BarChart3 size={28} />
  },
  {
    title: 'Marketing and Digital Visibility',
    desc: 'We amplify brand presence and improve digital performance through storytelling and strategy',
    icon: <Globe size={28} />
  },
  {
    title: 'Legal and Compliance Solutions',
    desc: 'We help businesses stay protected, compliant, and partnership-ready.',
    icon: <ShieldCheck size={28} />
  },
  {
    title: 'Human Resources and Organizational Structure',
    desc: 'We help businesses build strong, people-centered teams.',
    icon: <Users2 size={28} />
  },
  {
    title: 'Community and Capacity Development',
    desc: 'We build entrepreneurial ecosystems through capacity-building initiatives.',
    icon: <Building2 size={28} />
  }
];

const bundles = [
  {
    title: 'Startup Launch Pack',
    target: 'For new founders',
    items: ['CAC registration', 'Branding', 'Social media setup', 'Essential documents']
  },
  {
    title: 'Growth Pack',
    target: 'For established SMEs',
    items: ['Internal structure', 'HR systems', 'Financial audit', 'Workforce alignment']
  },
  {
    title: 'Visibility Pack',
    target: 'For brands ready to scale',
    items: ['Ads management', 'Content production', 'Social media management', 'SEO']
  },
  {
    title: 'Compliance Pack',
    target: 'For businesses that want to remain legally safe and partnership-ready',
    items: ['CAC', 'Compliance checks', 'Audit']
  }
];

const SolutionsLab = () => {
  return (
    <div className="pt-20">
      {/* Hero - Split Design */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[700px]">
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img 
              src={solutionsLabTeam} 
              alt="Operational business support and advisory" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-secondary flex flex-col justify-center p-12 lg:p-24 text-white relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1] font-serif italic">Stretch Solutions Lab</h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                The operational arm of STRETCH International, strengthening entrepreneurs and SMEs with the solid foundational systems, financial compliance, and execution support they need to scale and grow sustainably.
              </p>
            </motion.div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] scale-125 rotate-12 -translate-x-10 translate-y-10">
              <Briefcase size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white">
        <div className="container-wide grid md:grid-cols-3 gap-12">
          {['Clarity', 'Structure', 'Execution'].map((pillar, i) => (
            <div key={pillar} className="p-12 rounded-[50px] bg-slate-50 border border-slate-100 group hover:bg-secondary transition-all duration-500 hover:-translate-y-4">
              <span className="text-primary font-black text-7xl mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
              <h3 className="text-4xl font-black text-secondary mb-6 group-hover:text-white">{pillar}</h3>
              <p className="text-xl text-slate-600 group-hover:text-slate-300 leading-relaxed">
                {pillar === 'Clarity' && 'Helping founders understand their business and systems.'}
                {pillar === 'Structure' && 'Building processes that support efficient operations.'}
                {pillar === 'Execution' && 'Supporting teams to deliver projects and meet goals.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Card Design */}
      <section id="services" className="py-28 bg-slate-50 border-b border-slate-100">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Our Services</h2>
            <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-semibold max-w-3xl mx-auto">
              We offer six core service categories designed to meet entrepreneurs and organizations where they are. They include:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-10 rounded-[40px] shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                {/* Large Background Number */}
                <span className="absolute -top-6 -right-2 text-[150px] leading-none font-black text-slate-50 group-hover:text-primary/5 transition-colors pointer-events-none select-none z-0">
                  {i + 1}
                </span>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-secondary mb-4 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Bundles */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-24">
            <h3 className="text-5xl font-black text-secondary font-serif italic">Strategic Service Bundles</h3>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
            {bundles.map((bundle, i) => (
              <div key={i} className="flex flex-col p-12 rounded-[50px] border-2 border-slate-100 hover:border-primary transition-all duration-500 hover:shadow-2xl">
                <h4 className="text-3xl font-black text-secondary mb-3">{bundle.title}</h4>
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-10 block">{bundle.target}</span>
                <ul className="space-y-5 mb-12 flex-grow">
                  {bundle.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-4 text-xl text-slate-600 font-medium">
                      <CheckCircle2 size={24} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <a 
              href="https://rebrand.ly/solutions-consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary px-12 py-5 text-xl inline-flex items-center gap-4 group shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Business Consultation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>


      {/* Why Work With Us */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: Call to Action & Title */}
            <div className="lg:col-span-5">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Why Work With Us</span>
              <h3 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-[1.15] font-serif italic">
                Empowering your growth through structural excellence.
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                We don't just advise—we execute. Our multidisciplinary approach provides the operational backbone your business needs to thrive.
              </p>
              <a 
                href="https://rebrand.ly/solutions-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary px-10 py-5 text-xl inline-flex items-center gap-4 group shadow-lg hover:shadow-xl transition-all"
              >
                Book a Business Consultation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Right Side: Benefits Grid/List */}
            <div className="lg:col-span-7 space-y-6">
              {[
                "Experienced team across business development, finance, HR, marketing & legal.",
                "Proven systems for nonprofits, SMEs, NGOs & donor-funded projects.",
                "Hands-on execution support, not just consultation.",
                "Customizable services for every stage of business growth.",
                "Affordable, structured, and impact focused solutions."
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow items-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xl text-slate-700 font-semibold leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* Bookkeeping Guide */}
      <section className="py-24">
        <div className="container-wide bg-secondary rounded-[80px] p-12 md:p-24 overflow-hidden relative shadow-3xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">New Release</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1] font-serif italic">The Ultimate Guide to Bookkeeping</h3>
              <p className="text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
                This guide was created especially for you — the hardworking Nigerian entrepreneur who was never taught bookkeeping in school.
              </p>
              
              <div className="space-y-10 mb-12">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <h4 className="text-primary font-bold text-xl mb-4 uppercase tracking-widest">What You Will Get</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    7 easy-to-follow modules covering everything from Day 1 setup to tax preparation. Ready-to-use templates and a year-end checklist.
                  </p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-4 uppercase tracking-widest">Why You Need It</h4>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Recent tax reform laws in Nigeria make proper financial records mandatory. FIRS now has the authority to audit and penalize businesses that cannot show clear records.
                  </p>
                  <p className="text-white text-2xl font-serif italic border-l-4 border-primary pl-8 py-2">
                    Build a structured, scalable, and audit-ready business.
                  </p>
                </div>
              </div>

              <a 
                href="https://selar.com/15xo72o342" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary px-12 py-5 text-2xl inline-flex items-center gap-4 group"
              >
                Access the Guide <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="relative hidden lg:block">
               <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                 <img 
                   src={bookkeepingGuide} 
                   alt="Ultimate Guide to Bookkeeping" 
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>




          </div>
        </div>
      </section>

    </div>
  );
};

export default SolutionsLab;
