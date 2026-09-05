import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const infoItems = [
    { icon: "fa-university", key: "University", value: "Tribhuvan University" },
    { icon: "fa-book-open", key: "Degree", value: "Bachelor in Computer Application " },
    { icon: "fa-location-dot", key: "Location", value: portfolioData.location },
    { icon: "fa-heart", key: "Interests", value: portfolioData.interests.join(", ") },
    { icon: "fa-envelope", key: "Email", value: portfolioData.email }
  ];

  return (
    <section id="about" className="bg-bg2">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="About" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            {portfolioData.about.description.map((text, idx) => (
              <Reveal key={idx}>
                <p className="text-muted leading-relaxed">
                  {text.split('fullstack developer')[0]}
                  <strong className="text-text font-semibold">fullstack developer</strong>
                  {text.split('fullstack developer')[1]}
                </p>
              </Reveal>
            ))}
          </div>

          <ul className="space-y-4">
            {infoItems.map((item, idx) => (
              <Reveal key={idx}>
                <li className="flex gap-3">
                  <div className="w-9 h-9 bg-sky/10 border border-sky/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-xs text-sky`}></i>
                  </div>
                  <div className="flex flex-col gap-0.5 pt-1">
                    <span className="font-mono text-[0.67rem] text-green uppercase tracking-wider">{item.key}</span>
                    <span className="text-muted text-sm">{item.value}</span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;