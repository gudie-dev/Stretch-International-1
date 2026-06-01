import React from 'react';
import { motion } from 'framer-motion';
import whoWeAreImg from '../assets/hero20.png';
import ourStoryImg from '../assets/our_story_training.png';
import teamGoodness from '../assets/team_goodness.jpeg';
import teamHamidah from '../assets/team_hamidah.jpeg';
import teamIyanuoluwa from '../assets/team_iyanuoluwa.jpeg';
import teamAbdulateef from '../assets/team_abdulateef.jpeg';

const team = [
  { name: 'Barr. Goodness Akinwole-Idowu', role: 'Executive Director', initial: 'GA', image: teamGoodness },
  { name: 'Miss Hamidah Malomo', role: 'Operations Lead', initial: 'HM', image: teamHamidah, imagePosition: 'object-[50%_10%]' },
  { name: 'Miss Iyanuoluwa Adebayo', role: 'Communications Lead', initial: 'IA', image: teamIyanuoluwa, imagePosition: 'object-[50%_10%]' },
  { name: 'Mr. Abdullah Abdullateef', role: 'Graphics Lead', initial: 'AA', image: teamAbdulateef, imagePosition: 'object-[50%_10%]' },
];

const board = [
  { name: 'Mr Francis Nwalibe', role: 'Board Chairman', bio: 'A visionary leader with over 20 years of experience in strategic development and organizational growth, dedicated to driving STRETCH\'s long-term vision.' },
  { name: 'Meekness Ayomikun Akinwole-Idowu', role: 'Board Member', bio: 'Meekness Ayomikun Akinwole-Idowu is a development professional with a background in Development and Economic Geography. She is committed to expanding access to opportunities for young people, with a particular focus on education and entrepreneurship as drivers of social and economic mobility.\n\nShe currently serves as the FATE Scholar Programme Officer at FATE Foundation, where she leads coordination and implementation of the FATE Scholar Programme. The programme supports high-potential, entrepreneurial young individuals in gaining access to university education while building early-stage leadership and innovation capacity. In her role, she supports programme design, stakeholder engagement, and execution of activities that advance youth development outcomes.\n\nMeekness is currently pursuing further professional development through the Non-Profit Leadership and Management Programme at Lagos Business School, strengthening her capabilities in leadership, strategy, and organisational effectiveness within the non-profit sector.\n\nShe is actively engaged in youth and community development work and continues to contribute to initiatives focused on expanding social impact and strengthening opportunities for underserved populations.' },
  { name: 'Barr. Goodness Akinwole-Idowu', role: 'Executive Director', bio: 'Legal expert and development champion committed to bridging the entrepreneurial gap and equipping young leaders.' },
  { name: 'Mr. Adedeji Adebayo', role: 'Board Member', bio: 'Adedeji Adebayo is a multidisciplinary engineer, entrepreneur, and product strategist passionate about using technology and innovation to create meaningful social impact. His experience spans software engineering, product development, and emerging technologies, with a strong interest in building solutions that improve lives and strengthen communities. As a board member, Adedeji brings technical insight and strategic thinking to the organization’s initiatives and outreach efforts, helping shape systems and ideas that can grow sustainably over time. He is passionate about leveraging technology, creativity, and collaboration to expand impact, empower people, and support mission-driven work across communities.' },
  { name: 'Mr. Agbogho Akporido', role: 'Board Member', bio: 'Expert in financial strategy and large-scale project management, guiding our sustainable economic initiatives.' },
  { name: 'Mr Goodness Olaoluwa', role: 'Board Member', bio: 'Tech enthusiast and advocate for digital transformation in emerging markets, focusing on our innovation pipelines.' },
];

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Who We Are - Creative Hero Section */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Left Side: Creative Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 aspect-[4/3] rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img 
                  src={whoWeAreImg} 
                  alt="Who We Are - STRETCH International Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                />
              </div>
              {/* Backing decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-primary/30 rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] -z-10 translate-x-4 translate-y-4 opacity-25" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-20" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-20" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-8 py-4 rounded-3xl shadow-2xl z-20 flex items-center gap-3 border border-white/10 animate-bounce">
                <span className="w-3.5 h-3.5 bg-primary rounded-full animate-ping"></span>
                <span className="font-bold text-sm uppercase tracking-widest">Who We Are</span>
              </div>
            </div>

            {/* Right Side: High Impact Text */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block">Our Identity</span>
              <h1 className="text-5xl md:text-7xl font-black text-secondary leading-[1.1] font-serif italic">
                Who We Are
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-semibold">
                We are Africa's foremost development organization dedicated to bridging the entrepreneurial and innovation gap, equipping young people as global changemakers and solution providers, and driving economic growth through innovation and opportunity.
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed border-l-4 border-primary pl-6 font-medium">
                Registered as a company limited by guarantee in Nigeria, our Organization’s mission is rooted in positioning entrepreneurs and innovators as the solution providers to global pressing issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Secondary Section */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Side: Story Text */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary leading-[1.15] font-serif italic">
                Our Story
              </h2>
              
              <p className="text-xl text-secondary leading-relaxed font-bold font-serif italic">
                An Organization which began ordinarily as a mindset shift class in 2020 has now evolved into a powerhouse empowering, building and establishing the next generation of Global changemakers, solution providers and problem solvers.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                At STRETCH International our approach is a grassroot approach. Through our innovative programs and core activities, we develop and equip young people with knowledge, skills, mentorship opportunities, and platforms to think critically, see problems and create solutions to them, turn their solutions into profitable and sustainable businesses, and become employers of labour, thereby promoting economic growth, and eradicating poverty.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Since 2020, we have reached over 5,000 young people in 7 states across Nigeria through our annual entrepreneurship conferences, workshops, secondary school outreaches, and boot camp. Every young person we support is a partner in progress. Their success is our success, and their growth fuels national development. Together, we are shaping a future where young Nigerians can compete, contribute, and thrive.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed font-bold border-l-4 border-primary pl-6">
                At STRETCH International, we are more than just a development hub, we are a catalyst for change. Here, we see NO IMPOSSIBILITIES!
              </p>
            </div>

            {/* Right Side: Creative Story Image & Stat Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Background colored cards */}
                <div className="absolute inset-0 bg-secondary/5 rounded-[60px] translate-x-6 -translate-y-6 -z-10" />
                <div className="absolute inset-0 bg-primary/10 rounded-[60px] -translate-x-6 translate-y-6 -z-10" />
                
                {/* Main Image */}
                <img 
                  src={ourStoryImg} 
                  alt="Our Journey - STRETCH International Impact" 
                  className="rounded-[60px] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-[4/3] border-4 border-white relative z-10"
                />

                {/* Floating Stat Card */}
                <div className="absolute -bottom-10 right-6 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-100 flex flex-col items-center justify-center animate-pulse duration-[3000ms]">
                  <span className="text-primary font-black text-4xl block mb-1">5,000+</span>
                  <span className="text-secondary font-bold uppercase tracking-wider text-xs">Young People Reached</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Team & Board Section */}
      <section className="py-28 bg-white">
        <div className="container-wide">
          {/* Team Grid */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h3 className="text-5xl font-black text-secondary">Our Core Team</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {team.map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="w-56 h-56 rounded-full bg-slate-50 mx-auto mb-8 flex items-center justify-center text-6xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border-4 border-white overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.imagePosition || 'object-center'}`} />
                    ) : (
                      member.initial
                    )}
                  </div>
                  <h4 className="text-2xl font-black text-secondary mb-2">{member.name}</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Board */}
          <div className="bg-secondary rounded-[60px] p-12 md:p-24 text-white shadow-3xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6">Board of Directors</h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-4 max-w-5xl mx-auto">
              {board.map((member, i) => (
                <div key={i} className="group flex items-start gap-6 text-slate-300 py-6 border-b border-white/10 hover:text-white transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-primary rounded-full shrink-0 shadow-lg shadow-primary/50 mt-2.5 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1">
                    <span className="text-xl font-medium block">{member.name} - {member.role}</span>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="pt-3 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors whitespace-pre-line">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
