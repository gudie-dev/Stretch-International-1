import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { Target, Lightbulb, Shield, Users, Heart, Zap, ArrowRight } from 'lucide-react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import missionImg from '../assets/mission_new.jpg';
import impactHubLogo from '../assets/impact_hub_logo_new.png';
import solutionsLabLogo from '../assets/solutions_lab_logo_new.png';
import valInnovation from '../assets/bootcamp_innovation.png';
import valPossibility from '../assets/value_possibility.png';
import valDiscipline from '../assets/bootcamp_discipline.png';
import valEmpathy from '../assets/bootcamp_empathy.png';
import valIntegrity from '../assets/bootcamp_integrity.png';

import partnerWadhwani from '../assets/partners/Wadhwani-Foundation-Logo.webp';
import partnerKits from '../assets/partners/Kits on Earth logo.jpg';
import partnerMethodist from '../assets/partners/Methodist Logo.jpeg';
import partnerEducation from '../assets/partners/Ministry of Education logo.jpeg';
import partnerSolutions from '../assets/partners/Solutions Lab Logo.jpg';
const Home = () => {
  const Counter = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }
    }, [inView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
  };

  const divisions = [
    {
      id: 'impact-hub',
      title: 'Stretch Impact Hub',
      desc: 'Bootcamps, programs, leadership, and entrepreneurship training for the next generation.',
      icon: <Zap className="text-primary" size={32} />,
      logo: impactHubLogo,
      color: 'bg-emerald-50',
      link: '/impact-hub'
    },
    {
      id: 'solutions-lab',
      title: 'Stretch Solutions Lab',
      desc: 'Business consultations, fundraising support, operational structuring, and expansion strategy.',
      icon: <Target className="text-secondary" size={32} />,
      logo: solutionsLabLogo,
      color: 'bg-sky-50',
      link: '/solutions-lab'
    }
  ];

  const values = [
    { 
      name: 'Innovation', 
      image: valInnovation,
      desc: 'We constantly seek new and better ways to solve complex problems, leveraging cutting-edge technology and creative thinking to drive sustainable impact across the continent.'
    },
    { 
      name: 'Possibility Mindset', 
      image: valPossibility,
      desc: 'At STRETCH, we believe there are NO IMPOSSIBILITIES. We approach every challenge with the conviction that a breakthrough is always within reach for the determined mind.'
    },
    { 
      name: 'Discipline', 
      image: valDiscipline,
      desc: 'Excellence is not an act, but a habit. We are committed to consistency, rigorous standards, and a structured approach to delivering world-class results.'
    },
    { 
      name: 'Empathy', 
      image: valEmpathy,
      desc: 'We lead with heart and deep understanding. By connecting with the lived experiences of our community, we build solutions that are as compassionate as they are effective.'
    },
    { 
      name: 'Integrity', 
      image: valIntegrity,
      desc: 'Trust is our foundation. We uphold the highest ethical standards, ensuring transparency, honesty, and radical accountability in every interaction and partnership.'
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <HeroSlider />

      {/* Impact Bar - Post Hero */}
      <section className="bg-secondary text-white py-6 border-b border-white/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm md:text-xl font-bold tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="text-primary font-black text-3xl md:text-4xl"><Counter value={1000} />+</span>
              <span className="text-slate-300">Entrepreneurs reached</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="text-primary font-black text-3xl md:text-4xl"><Counter value={150} />+</span>
              <span className="text-slate-300">students empowered</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="text-primary font-black text-3xl md:text-4xl"><Counter value={30} />+</span>
              <span className="text-slate-300">graduates interned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container-wide grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-primary/30">
                  <Target size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-3xl mb-4 text-secondary">Our Mission</h4>
                  <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
                    To prove that Africa has the intellectual and entrepreneurial capacity to become a global force, by placing young people in the right environments with the right knowledge, mentorship, and support to identify problems, build solutions, and transform their communities and economies.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-secondary/30">
                  <Lightbulb size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-3xl mb-4 text-secondary">Our Vision</h4>
                  <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
                    To be a world class catalyst of entrepreneurship and innovation spanning across various sectors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative max-w-lg lg:ml-auto mx-auto">
            <div className="aspect-[4/5] bg-primary/10 rounded-[60px] absolute -rotate-3 inset-0 scale-105" />
            <img 
              src={missionImg} 
              alt="Our Mission" 
              className="relative z-10 rounded-[60px] shadow-3xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white p-8 rounded-full shadow-2xl z-20 flex items-center justify-center animate-bounce">
               <span className="text-primary font-black text-2xl">IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions - Corporate & Professional */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Structured for Success</h2>
            <h3 className="text-5xl md:text-6xl font-black text-secondary mb-8">Our Divisions</h3>
            <p className="text-xl text-slate-500 leading-relaxed">We provide a dual-focused approach to empower both individuals and established enterprises.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {divisions.map((div) => (
              <motion.div 
                key={div.id}
                whileHover={{ y: -15 }}
                className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 flex flex-col justify-between group h-full hover:bg-secondary transition-colors duration-500"
              >
                <div>
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-10 group-hover:scale-110 transition-transform overflow-hidden">
                    {div.logo ? (
                      <img src={div.logo} alt={div.title} className="w-full h-full object-contain p-2" />
                    ) : (
                      div.icon
                    )}
                  </div>
                  <h4 className="text-4xl font-black text-secondary mb-6 group-hover:text-white">{div.title}</h4>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed group-hover:text-slate-300">{div.desc}</p>
                </div>
                <Link 
                  to={div.link} 
                  className="inline-flex items-center gap-3 font-bold text-primary group-hover:text-white transition-colors text-lg"
                >
                  Explore Opportunity <ArrowRight size={24} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Horizontal Marquee */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08)_0,transparent_60%)] pointer-events-none" />
        <div className="container-wide relative z-10 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-6 font-serif italic">Our Core Values</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              The foundational principles that guide our choices, shape our culture, and drive our impact.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex py-10">
          <motion.div
            className="flex gap-16 md:gap-32 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            style={{ width: "max-content" }}
          >
            {[
              { name: 'Innovation' },
              { name: 'Possibility Mindset' },
              { name: 'Discipline' },
              { name: 'Empathy' },
              { name: 'Integrity' },
              { name: 'Innovation' },
              { name: 'Possibility Mindset' },
              { name: 'Discipline' },
              { name: 'Empathy' },
              { name: 'Integrity' }
            ].map((val, idx) => (
              <div key={idx} className="flex items-center gap-16 md:gap-32">
                <span className="text-3xl md:text-5xl font-black text-slate-700 hover:text-white transition-colors duration-500 font-serif italic whitespace-nowrap">
                  {val.name}
                </span>
                <span className="text-primary text-2xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Serif Style */}
      <section className="py-32 bg-white">
        <div className="container-wide">
          <div className="text-center mb-24">
             <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Global Recognition</h2>
             <h3 className="text-5xl md:text-6xl font-black text-secondary mb-8 font-serif italic">Impact Stories</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                quote: "The business consultation session with Stretch Solutions Lab was quite insightful, educative and an eye-opener to my business",
                name: "Tecton Studio",
                role: "Business Owner",
                initials: "TS",
                color: "bg-primary"
              },
              {
                quote: "Working with Stretch allowed me to contribute to real world projects that sharpened my skills and strengthened my approach to design and problem-solving. It pushed me to adapt to professional standards while opening up valuable opportunities for growth. Overall, it was a highly rewarding experience",
                name: "Abdullahi Abdulateef",
                role: "Brand and Social Media Designer (Volunteer)",
                initials: "AA",
                color: "bg-secondary"
              },
              {
                quote: "The Global Leadership Internship Program was an amazing experience for me, I was able to learn and unlearn many things in the professional sector and I was able to collaborate with various teams. You should be a part of the program",
                name: "Oni Ebunoluwalomo",
                role: "Past intern/alum",
                initials: "OE",
                color: "bg-primary"
              },
              {
                quote: "During the launchpad bootcamp, i learnt how to make decisions through critical thinking and the importance of effective communication to be a great leader",
                name: "Deborah Hassan",
                role: "Bootcamp Participant (14 years Old)",
                initials: "DH",
                color: "bg-secondary"
              },
              {
                quote: "Honored to be part of the YES program as a mentor. Mentorship is powerful not because it gives answers, but because it expands perspective. Grateful to be working alongside such an incredible team of mentors who are deeply committed to raising future-ready innovators. The work is intentional",
                name: "Bella Bassey",
                role: "YES mentor (Edtech Innovator and STEM educator)",
                initials: "BB",
                color: "bg-primary"
              }
            ].map((t, i) => (
              <div key={i} className="flex flex-col bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <span className="text-8xl text-primary/10 font-serif leading-none mb-[-40px]">"</span>
                <p className="text-xl font-serif italic text-secondary mb-10 leading-relaxed relative z-10 pl-4">
                  {t.quote}
                </p>
                <div className="mt-auto flex items-center gap-5 border-t border-slate-200 pt-8">
                  <div className={`w-14 h-14 ${t.color} rounded-full flex items-center justify-center font-bold text-white shadow-lg shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-lg leading-tight">{t.name}</h5>
                    <span className="text-sm text-slate-500 uppercase font-bold tracking-widest block mt-1">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Credibility Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">Our Ecosystem Partners</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <img src={partnerWadhwani} alt="Wadhwani Foundation" className="h-12 md:h-16 object-contain mix-blend-multiply transition-all hover:scale-105" />
             <img src={partnerKits} alt="Kits on Earth" className="h-12 md:h-16 object-contain mix-blend-multiply transition-all hover:scale-105" />
             <img src={partnerMethodist} alt="Methodist Grammar School" className="h-12 md:h-16 object-contain mix-blend-multiply transition-all hover:scale-105" />
             <img src={partnerEducation} alt="Ministry of Education" className="h-12 md:h-16 object-contain mix-blend-multiply transition-all hover:scale-105" />
             <img src={partnerSolutions} alt="The Stretch Solutions Lab" className="h-12 md:h-16 object-contain mix-blend-multiply transition-all hover:scale-105" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
