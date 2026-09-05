import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="bg-bg2">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Skills" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.skills.map((skillGroup, idx) => (
            <Reveal key={idx}>
              <div className="bg-card border border-sky/10 rounded-2xl p-5 transition-all duration-200 hover:border-sky/25 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <i className={`fas ${skillGroup.icon} text-sky text-sm`}></i>
                  <span className="font-mono text-xs text-sky-light uppercase tracking-wider">{skillGroup.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className={`tech-tag ${skillGroup.variant === 'sky' ? 'tech-tag-sky' : ''}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;