import { motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const name = "Dinesh Kadel";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 120
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-green border border-green/30 px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green rounded-full animate-blink"></span>
              Available for internships & collaborations
            </div>
          </Reveal>

          <Reveal>
            <motion.h1
              className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-text whitespace-nowrap inline-flex items-baseline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.85, ease: "easeInOut" }}
                className="inline-block text-sky ml-1.5 font-light"
                aria-hidden="true"
              >
                |
              </motion.span>
            </motion.h1>
          </Reveal>

          <Reveal>
            <p className="font-mono text-sm text-muted mb-6 flex items-center gap-2 flex-wrap">
              <i className="fas fa-terminal text-sky"></i>
              Fullstack Developer &nbsp;·&nbsp; BCA Student @ TU
            </p>
          </Reveal>

          <Reveal>
            <p className="text-muted max-w-lg mb-8 leading-relaxed">
              I build end-to-end web applications from clean REST APIs to polished UIs.
              Crafting projects with the MERN stack, NextJS, and TypeScript.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" icon="fa-rocket" to="/projects">View My Work</Button>
              <Button variant="outline" icon="fa-envelope" to="/contact">Get in Touch</Button>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative group mx-auto md:ml-auto max-w-sm">
            {/* Background Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky/20 to-green/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>

            {/* Image Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-sky/10  transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
              <img
                src="./dist/assets/image.webp"
                alt="Dinesh Kadel"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rotate-90"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-sky/30 rounded-br-2xl -z-10 group-hover:bottom-[-20px] group-hover:right-[-20px] transition-all duration-500"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-green/30 rounded-tl-2xl -z-10 group-hover:top-[-20px] group-hover:left-[-20px] transition-all duration-500"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;