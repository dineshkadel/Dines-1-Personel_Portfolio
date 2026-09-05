import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Reveal from '../components/ui/Reveal';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by index or slugified name
  const project = portfolioData.projects.find((p, idx) => 
    idx.toString() === id || 
    p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id
  );

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-muted mb-6">The project you are looking for does not exist or has been moved.</p>
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky text-bg font-mono text-sm font-semibold hover:bg-sky-light transition-all"
        >
          <i className="fas fa-arrow-left text-xs"></i> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <Reveal>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 font-mono text-xs text-sky hover:text-green mb-8 transition-colors cursor-pointer"
        >
          <i className="fas fa-arrow-left"></i> Back
        </button>

        {/* Media Preview Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-bg2 border border-sky/15 mb-8 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 bg-bg/80 backdrop-blur-md border-b border-sky/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <span className="font-mono text-xs text-muted truncate">{project.name}</span>
            <div className="w-6"></div>
          </div>

          {project.video ? (
            <video
              src={project.video}
              poster={project.image || undefined}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pt-8"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover pt-8"
            />
          ) : (
            <div className={`w-full h-full pt-8 bg-gradient-to-br ${project.gradient || 'from-sky-900/30 to-blue-900/30'} flex flex-col items-center justify-center p-8`}>
              <div className="w-20 h-20 rounded-2xl bg-card border border-sky/20 flex items-center justify-center mb-4 shadow-xl">
                <i className={`fas ${project.icon || 'fa-laptop-code'} ${project.iconColor || 'text-sky'} text-3xl`}></i>
              </div>
              <span className="font-mono text-xs text-sky uppercase tracking-widest font-semibold">Live Project Showcase</span>
            </div>
          )}
        </div>

        {/* Project Header & Meta */}
        <div className="flex flex-wrap items-start justify-between gap-6 pb-6 mb-6 border-b border-sky/10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-text">
              {project.name}
            </h1>
            <p className="font-mono text-xs text-sky flex items-center gap-2">
              <i className={`fas ${project.icon || 'fa-code-branch'}`}></i> Fullstack Project
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-sky text-bg font-mono text-xs font-semibold flex items-center gap-2 hover:bg-sky-light transition-all shadow-md"
              >
                <i className="fas fa-arrow-up-right-from-square"></i> Live Demo
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-bg2 border border-sky/20 text-text font-mono text-xs font-medium flex items-center gap-2 hover:text-sky hover:border-sky transition-all shadow-md"
              >
                <i className="fab fa-github"></i> Source Code
              </a>
            )}
          </div>
        </div>

        {/* Description & Tech Stack */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg text-text">About the Project</h3>
            <p className="text-muted leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          <div className="bg-card border border-sky/10 rounded-2xl p-6 h-fit">
            <h4 className="font-mono text-xs text-sky uppercase tracking-wider mb-4 font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="tech-tag tech-tag-sky">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectDetailPage;
