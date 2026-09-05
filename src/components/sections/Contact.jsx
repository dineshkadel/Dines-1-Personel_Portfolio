import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const contact = {
    email: 'dineshkadel11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dinesh-kadel-7aa589292',
    github: 'https://github.com/dines-1/',
    phone: '+977-9745930752',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // EmailJS credentials from environment variables with fallbacks
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please reach out directly to dineshkadel11@gmail.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-card border-t border-sky/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <SectionHeader title="Contact" icon="fa-paper-plane" />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h3 className="text-2xl font-bold text-text mb-3">
                Let's discuss a project or opportunity
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Have an idea, an open role, or a project in mind? Fill out the form or connect directly through any of my channels.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Reveal>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-sky/10 hover:border-sky/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky/10 border border-sky/20 flex items-center justify-center text-sky text-sm group-hover:bg-sky group-hover:text-bg transition-colors">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Email</span>
                    <span className="text-sm font-medium text-text truncate block group-hover:text-sky transition-colors">{contact.email}</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-sky/10 hover:border-sky/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center text-green text-sm group-hover:bg-green group-hover:text-bg transition-colors">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Phone / WhatsApp</span>
                    <span className="text-sm font-medium text-text truncate block group-hover:text-green transition-colors">{contact.phone}</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-sky/10 hover:border-sky/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky/10 border border-sky/20 flex items-center justify-center text-sky text-sm group-hover:bg-sky group-hover:text-bg transition-colors">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">LinkedIn</span>
                    <span className="text-sm font-medium text-text truncate block group-hover:text-sky transition-colors">dinesh-kadel</span>
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-sky/10 hover:border-sky/40 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-card border border-sky/20 flex items-center justify-center text-sky text-sm group-hover:border-sky transition-colors">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">GitHub</span>
                    <span className="text-sm font-medium text-text truncate block group-hover:text-sky transition-colors">dines-1</span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right Column: EmailJS Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-bg/70 border border-sky/15 backdrop-blur-md shadow-xl flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block font-mono text-xs text-sky mb-2" htmlFor="user_name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-bg2/90 border border-sky/15 text-text placeholder:text-muted/50 focus:border-sky focus:ring-1 focus:ring-sky outline-none transition-all text-sm font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-mono text-xs text-sky mb-2" htmlFor="user_email">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-bg2/90 border border-sky/15 text-text placeholder:text-muted/50 focus:border-sky focus:ring-1 focus:ring-sky outline-none transition-all text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block font-mono text-xs text-sky mb-2" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-bg2/90 border border-sky/15 text-text placeholder:text-muted/50 focus:border-sky focus:ring-1 focus:ring-sky outline-none transition-all text-sm font-sans"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block font-mono text-xs text-sky mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Hi Dinesh, I would love to connect about..."
                    className="w-full px-4 py-3 rounded-xl bg-bg2/90 border border-sky/15 text-text placeholder:text-muted/50 focus:border-sky focus:ring-1 focus:ring-sky outline-none transition-all text-sm font-sans resize-none"
                  ></textarea>
                </div>

                {/* Status Message Display */}
                {status.message && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-mono flex items-center gap-2.5 ${status.type === 'success'
                      ? 'bg-green/10 border border-green/30 text-green'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                      }`}
                  >
                    <i className={`fas ${status.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky text-bg font-semibold text-sm hover:bg-sky-light hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-sky/10"
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-sm"></i>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-xs"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
