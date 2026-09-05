import Reveal from './Reveal';

const SectionHeader = ({ title, icon = "fa-circle-dot" }) => {
  return (
    <Reveal>
      <div className="w-11 h-0.5 bg-gradient-to-r from-sky to-green rounded-full mb-2"></div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">
        {title}
      </h2>
    </Reveal>
  );
};

export default SectionHeader;