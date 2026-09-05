import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Education" />
        
        <div className="space-y-4">
          {portfolioData.education.map((edu, idx) => (
            <Reveal key={idx}>
              <div className="bg-card border border-sky/10 rounded-2xl p-5 md:p-6 relative overflow-hidden transition-all duration-200 hover:border-sky/25 hover:translate-x-1">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky to-green rounded-l"></div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky/10 border border-sky/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${edu.icon} text-sky text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <div>
                        <h3 className="font-semibold text-base">{edu.degree}</h3>
                        <p className="font-mono text-sm text-sky">{edu.school}</p>
                      </div>
                      <span className={`font-mono text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                        edu.status === 'ongoing' 
                          ? 'bg-green/10 text-green border border-green/30' 
                          : 'bg-sky/10 text-sky border border-sky/25'
                      }`}>
                        <i className={`fas ${edu.status === 'ongoing' ? 'fa-circle' : 'fa-check'} text-[0.45rem]`}></i>
                        {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-muted flex-wrap">
                      <span className="flex items-center gap-1"><i className="fas fa-location-dot text-green text-[0.7rem]"></i> {edu.location}</span>
                      <span className="flex items-center gap-1"><i className="far fa-calendar text-green text-[0.7rem]"></i> {edu.period}</span>
                      {edu.year && <span className="flex items-center gap-1"><i className="fas fa-layer-group text-green text-[0.7rem]"></i> {edu.year}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;