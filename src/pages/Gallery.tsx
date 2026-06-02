import { motion } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1523240715639-99a8080ffc0d?auto=format&fit=crop&q=80', title: 'Workshop Session' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', title: 'Team Collaboration' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80', title: 'Innovation Lab' },
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80', title: 'Strategy Meeting' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', title: 'Global Leaders' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: 'Entrepreneurship Bootcamp' },
];

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-24">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Visual Journey</h2>
            <h1 className="text-5xl md:text-7xl font-black text-secondary mb-8 font-serif italic">Our Impact in Pictures</h1>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium">
              A glimpse into the workshops, bootcamps, and sessions that are shaping Africa's future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[50px] aspect-[4/5] group cursor-pointer shadow-2xl"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white font-black text-2xl mb-2">{img.title}</h4>
                  <span className="text-primary text-sm font-bold uppercase tracking-widest">STRETCH International</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
