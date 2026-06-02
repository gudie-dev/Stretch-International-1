import { motion } from 'framer-motion';
import { Handshake, Heart, BookOpen, Presentation, Users, Sparkles } from 'lucide-react';
import partnershipImg from '../assets/partnership_outer_v3.png';
import supportImg from '../assets/partnership_inner_v4.png';

const JoinUs = () => {
  const yesPrograms = [
    {
      title: 'Y.E.S For Schools',
      desc: 'Empower classrooms and bring world-class entrepreneurship training directly to secondary schools.',
      icon: <BookOpen className="text-emerald-500" size={28} />,
      link: 'https://rebrand.ly/YES-for-Schools',
      color: 'border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-50/10'
    },
    {
      title: 'Y.E.S For Volunteers',
      desc: 'Join our dedicated team and coordinate events, logistics, and outreaches across Nigeria.',
      icon: <Heart className="text-sky-500" size={28} />,
      link: 'https://rebrand.ly/YES-Volunteers-',
      color: 'border-sky-500/20 hover:border-sky-500/50 bg-sky-50/10'
    },
    {
      title: 'Y.E.S For Facilitators',
      desc: 'Share your expertise and lead high-impact training sessions for our bootcamp participants.',
      icon: <Presentation className="text-purple-500" size={28} />,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdAPw6EsBgIF7r2ZDI7BEYCpy1fF1Ls3YzleBd8S8oGKoS-kw/viewform?fbclid=PAdGRzdgRUsxtleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAachrqoBPVERn1Zku-BxyXwXXIgzKxRE6hTJ7zIpt18Umly3nzNVX77nn7izOw_aem_xYxar4vUoJPWqC9-eutUGA',
      color: 'border-purple-500/20 hover:border-purple-500/50 bg-purple-50/10'
    },
    {
      title: 'Y.E.S For Mentors',
      desc: 'Guide young changemakers, refine their business models, and shape their leadership paths.',
      icon: <Users className="text-primary" size={28} />,
      link: 'https://rebrand.ly/volunteer-mentorship2025',
      color: 'border-primary/20 hover:border-primary/50 bg-primary/5'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Get Involved</span>
            <h1 className="text-5xl md:text-8xl font-black text-secondary mb-8 font-serif italic">Join Our Mission</h1>
            <p className="text-2xl text-slate-500 leading-relaxed font-medium">
              There are many ways to support our mission. Whether you want to partner, volunteer, facilitate, or mentor, we are ready to connect and build together.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partnership Section */}
      <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Side: Creative Image Composition - Premium Collage Concept */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px]">
              
              {/* Backing decorative elements */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-20" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-20" />
              
              {/* Radial dots grid */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[radial-gradient(#f43f5e_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-25 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 -z-10" />

              {/* Main Background Image Card (Rotated slightly left) */}
              <motion.div 
                whileHover={{ rotate: -1, scale: 1.02 }}
                className="w-[75%] aspect-[4/3] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative -rotate-3 transition-all duration-700 -translate-x-6 z-10 group"
              >
                <img 
                  src={partnershipImg} 
                  alt="STRETCH Strategic Partnership" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                />
              </motion.div>

              {/* Secondary Overlapping Image Card (Rotated slightly right, overlapping bottom-right) */}
              <motion.div 
                whileHover={{ rotate: 1, scale: 1.05 }}
                className="w-[48%] aspect-[4/3] rounded-[40px] overflow-hidden shadow-3xl border-4 border-white bg-slate-100 absolute bottom-4 right-2 rotate-6 z-20 group transition-all duration-700"
              >
                <img 
                  src={supportImg} 
                  alt="STRETCH Empowering Leaders" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                />
              </motion.div>

              {/* Little Floating Decorative Badge */}
              <div className="absolute -bottom-4 left-10 bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl z-30 border border-white/10 animate-bounce duration-[4000ms]">
                NO IMPOSSIBILITIES
              </div>
            </div>

            {/* Right Side: Partnership Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-5 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase">
                <Handshake size={20} />
                Strategic Collaboration
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
                Partnership
              </h2>
              <p className="text-2xl text-slate-700 leading-relaxed font-bold font-serif italic">
                Are you passionate about youth development, entrepreneurship and social impact? 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We are seeking individuals, organisations, and brands who would like to support the program through financial contributions, in-kind support, or strategic partnerships.
              </p>
              <div className="pt-4">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfCYcBslNuar_cuVSTY2lCBAwcRkv_uHrSsQTMOIrIck0rtsA/viewform?fbclid=PAb21jcARUstBleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAachrqoBPVERn1Zku-BxyXwXXIgzKxRE6hTJ7zIpt18Umly3nzNVX77nn7izOw_aem_xYxar4vUoJPWqC9-eutUGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-10 py-5 text-lg shadow-xl inline-flex items-center gap-3 hover:translate-y-[-4px] transition-transform duration-300"
                >
                  Become a Partner <Sparkles size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* YES Pathways / Support Section */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Support Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 font-serif italic">Donate & Act</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Join the Youth Entrepreneurs and Innovations SWITCH (Y.E.S) program to lend your support, coordinate, teach, or mentor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yesPrograms.map((prog, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`bg-white p-8 rounded-[40px] border shadow-sm flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-500 ${prog.color}`}
              >
                <div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 border border-slate-100">
                    {prog.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary mb-4 leading-tight">{prog.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium">{prog.desc}</p>
                </div>
                <a 
                  href={prog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-secondary text-white font-bold text-sm tracking-wider uppercase shadow-md hover:bg-primary transition-colors text-center"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
