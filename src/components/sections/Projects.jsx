import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Projects" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.projects.map((project, idx) => (
            <Reveal key={idx}>
              <div className="bg-card border border-sky/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-sky/40 hover:-translate-y-2">
              
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <i className={`fas ${project.icon} text-sky text-sm`}></i>
                    {project.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, techIdx) => (
                      <span key={techIdx} className={`tech-tag ${tech === 'Node.js' || tech === 'Express' || tech === 'NestJS' || tech === 'Socket.io' ? 'tech-tag-sky' : ''}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-sky/10">
                    <a href={project.github} className="font-mono text-xs text-sky flex items-center gap-1.5 hover:text-green transition-colors">
                      <i className="fab fa-github"></i> GitHub
                    </a> 
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

export default Projects;