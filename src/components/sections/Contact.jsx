import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
  const contact = {
    email: 'dineshkadel11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dinesh-kadel-7aa589292',
    github: 'https://github.com/dines-1/',
    phone: '+977-9745930752',
  };

  return (
    <section id="contact" className="bg-card border-t border-sky/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Contact" icon="fa-paper-plane" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${contact.email}`}
            className="border border-sky/10 p-6 rounded-2xl hover:border-sky/40 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-sky flex items-center gap-2">
              <i className="fas fa-envelope"></i>
              Email
            </h3>
            <p className="mt-2 text-muted text-sm break-all">{contact.email}</p>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-sky/10 p-6 rounded-2xl hover:border-sky/40 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-sky flex items-center gap-2">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </h3>
            <p className="mt-2 text-muted text-sm">linkedin.com/in/dinesh-kadel</p>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="border border-sky/10 p-6 rounded-2xl hover:border-sky/40 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-sky flex items-center gap-2">
              <i className="fab fa-github"></i>
              GitHub
            </h3>
            <p className="mt-2 text-muted text-sm">github.com/dinesh-kadel</p>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="border border-sky/10 p-6 rounded-2xl hover:border-sky/40 hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-sky flex items-center gap-2">
              <i className="fas fa-phone"></i>
              Phone/ Viber/ Whatsapp
            </h3>
            <p className="mt-2 text-muted text-sm">{contact.phone}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
