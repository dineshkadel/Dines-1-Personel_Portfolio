import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  // Support either flat array of skills or legacy grouped array
  const skillsList = Array.isArray(portfolioData.skills)
    ? portfolioData.skills[0]?.skills
      ? portfolioData.skills.flatMap(group => group.skills)
      : portfolioData.skills
    : [];

  return (
    <section id="skills" className="bg-bg2">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 md:gap-4">
          {skillsList.map((skill, idx) => {
            const name = typeof skill === 'string' ? skill : skill.name;
            const icon = typeof skill === 'object' ? skill.icon : null;

            return (
              <Reveal key={idx}>
                <div className="group relative p-4 rounded-2xl bg-card border border-sky/10 hover:border-sky/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-sky/5 flex flex-col items-center justify-center text-center cursor-default h-full">
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div className="w-12 h-12 rounded-xl bg-bg/80 border border-sky/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:border-sky/30 group-hover:bg-sky/10">
                    {icon ? (
                      <i className={`${icon} text-2xl flex-shrink-0`}></i>
                    ) : (
                      <i className="fas fa-code text-xl text-sky"></i>
                    )}
                  </div>

                  <span className="font-mono text-xs font-medium text-text group-hover:text-sky transition-colors">
                    {name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;