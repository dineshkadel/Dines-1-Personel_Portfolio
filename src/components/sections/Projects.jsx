import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Projects" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <Reveal key={idx}>
              <div className="group bg-card border border-sky/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-sky/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky/5 flex flex-col h-full">
                
                {/* Image / Video Preview Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-bg2/90 border-b border-sky/10">
                  {/* Browser Window Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-1.5 bg-bg/80 backdrop-blur-md border-b border-sky/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="font-mono text-[10px] text-muted truncate max-w-[150px]">
                      {project.name}
                    </span>
                    <div className="w-6"></div>
                  </div>

                  {/* Media Content */}
                  {project.video ? (
                    <video
                      src={project.video}
                      poster={project.image || undefined}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pt-6"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pt-6"
                    />
                  ) : (
                    /* Dynamic Mockup Preview Banner */
                    <div className={`w-full h-full pt-6 bg-gradient-to-br ${project.gradient || 'from-sky-900/30 to-blue-900/30'} relative flex flex-col items-center justify-center p-6 overflow-hidden`}>
                      <div className="absolute inset-0 grid-bg opacity-30"></div>
                      <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-sky/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-card/90 border border-sky/20 backdrop-blur-md flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 group-hover:border-sky/40 transition-all duration-300">
                        <i className={`fas ${project.icon || 'fa-laptop-code'} ${project.iconColor || 'text-sky'} text-xl`}></i>
                      </div>
                      <span className="relative z-10 font-mono text-[10px] text-sky tracking-wider uppercase font-semibold">
                        Preview
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 z-30 pt-6 bg-bg/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2.5">
                    <Link
                      to={`/projects/${idx}`}
                      className="px-3 py-1.5 rounded-lg bg-card/90 border border-sky/30 text-text font-mono text-xs font-semibold flex items-center gap-1.5 hover:border-sky hover:text-sky transition-all shadow-md hover:scale-105"
                    >
                      <i className="fas fa-circle-info text-[10px]"></i> Details
                    </Link>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-sky text-bg font-mono text-xs font-semibold flex items-center gap-1.5 hover:bg-sky-light transition-all shadow-md hover:scale-105"
                      >
                        <i className="fas fa-arrow-up-right-from-square text-[10px]"></i> Live
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-bg2/95 border border-sky/30 text-text font-mono text-xs font-medium flex items-center gap-1.5 hover:text-sky hover:border-sky transition-all shadow-md hover:scale-105"
                      >
                        <i className="fab fa-github text-xs"></i> Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-semibold text-base flex items-center gap-2 text-text group-hover:text-sky transition-colors">
                    <i className={`fas ${project.icon || 'fa-code-branch'} ${project.iconColor || 'text-sky'} text-xs`}></i>
                    {project.name}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.stack.map((tech, techIdx) => (
                      <span key={techIdx} className={`tech-tag ${tech === 'Node.js' || tech === 'Express' || tech === 'NestJS' || tech === 'Socket.io' ? 'tech-tag-sky' : ''}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-sky/10">
                    <div className="flex items-center gap-3">
                      {project.github && project.github !== "#" ? (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="font-mono text-xs text-sky flex items-center gap-1.5 hover:text-green transition-colors"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      ) : (
                        <span className="font-mono text-xs text-muted/60 flex items-center gap-1.5">
                          <i className="fab fa-github"></i> Private
                        </span>
                      )}

                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-green flex items-center gap-1.5 hover:text-sky transition-colors"
                        >
                          <i className="fas fa-arrow-up-right-from-square text-[10px]"></i> Live
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/projects/${idx}`}
                      className="font-mono text-xs text-muted hover:text-sky flex items-center gap-1 transition-colors"
                    >
                      Details <i className="fas fa-arrow-right text-[10px]"></i>
                    </Link>
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