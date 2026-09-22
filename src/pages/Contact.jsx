import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  User,
  AtSign,
  CheckCircle,
  Instagram,
  MessageCircle,
} from "lucide-react";

// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SERVICE_ID = "service_lksueap";
const TEMPLATE_ID = "template_p5tqs1b";
const PUBLIC_KEY = "fTOYbzk4T_L7BKCLG";

const INITIAL_FORM = {
  name: "",
  email: "",
  budget: "₦200,000 - ₦500,000",
  projectType: "Business Website",
  message: "",
};

const contactInfo = [
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+234 814 433 1503",
    link: "https://wa.me/2348144331503",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "omodeletemitope12@gmail.com",
    link: "mailto:omodeletemitope12@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+234 814 433 1503",
    link: "tel:+2348144331503",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Oyo State, Nigeria",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/temitope-omodele-07b977404",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    link: "https://github.com/emitteremit",
  },
  {
    icon: <Twitter size={18} />,
    label: "X / Twitter",
    link: "https://x.com/Emmiter001?t=bJNnYymgOw6HuRgTSicLnw&s=09",
  },
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    link: "https://www.instagram.com/emit2113/",
  },
];

const projectTypes = [
  "Business Website",
  "E-Commerce",
  "Admin Dashboard",
  "Booking System",
  "Healthcare Platform",
  "Real Estate",
  "Fintech / Web App",
  "Portfolio Website",
  "Custom Web Application",
  "Website Redesign",
];

const serviceCards = [
  {
    number: "01",
    title: "Websites",
    description:
      "Modern, responsive websites designed around your business and audience.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Interactive platforms, dashboards and custom applications with real functionality.",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Online stores with product management, customer flows and scalable architecture.",
  },
  {
    number: "04",
    title: "Business Systems",
    description:
      "Custom digital systems that help businesses manage operations more efficiently.",
  },
];

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[`${name}Error`]) {
      setErrors((prev) => ({
        ...prev,
        [`${name}Error`]: "",
      }));
    }

    if (error) {
      setError("");
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.nameError = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.emailError = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.emailError = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.messageError =
        "Please tell me a little about your project.";
    } else if (form.message.trim().length < 10) {
      newErrors.messageError =
        "Please provide a little more detail about your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(false);
    setError("");

    if (!validate()) return;

    setSending(true);

    try {
      const templateParams = {
        user_name: form.name,
        user_email: form.email,
        subject: `[${form.projectType}] — Budget: ${form.budget}`,
        message: form.message,
        project_type: form.projectType,
        budget: form.budget,
        reply_to: form.email,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSuccess(true);
      setForm(INITIAL_FORM);
      setErrors({});

      setTimeout(() => {
        setSuccess(false);
      }, 7000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Something went wrong while sending your message. Please try WhatsApp or email instead."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden text-white">
        {/* BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Background />
        </div>

        {/* DARK OVERLAY */}
        <div className="pointer-events-none fixed inset-0 -z-[5] bg-black/10" />

        <div className="relative z-10">
          {/* HERO */}
          <section className="px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  Available for Projects
                </div>

                <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Start Your
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Next Project.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Looking for a modern website, admin dashboard, healthcare
                  platform, booking system or custom web application? Let's
                  discuss your ideas and bring them to life.
                </p>
              </div>

              {/* SERVICE CARDS */}
              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {serviceCards.map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                        {item.number}
                      </span>

                      <span className="h-px w-10 bg-white/15 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-400" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section className="px-6 py-20 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              {/* LEFT */}
              <div>
                <div className="mb-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Let's Connect
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let's build something useful.
                  </h2>

                  <p className="mt-4 max-w-lg leading-7 text-slate-400">
                    Whether you have a complete project idea or you're still
                    figuring things out, send me a message and we can discuss
                    what you need.
                  </p>
                </div>

                {/* CONTACT INFO */}
                <div className="space-y-3">
                  {contactInfo.map((item) => {
                    const content = (
                      <>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                          {item.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {item.label}
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-slate-200 sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </>
                    );

                    if (item.link) {
                      return (
                        <a
                          key={item.label}
                          href={item.link}
                          target={
                            item.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                {/* SOCIALS */}
                <div className="mt-8">
                  <p className="mb-4 text-sm font-semibold text-slate-300">
                    Connect With Me
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* RESPONSE CARD */}
                <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] p-5 backdrop-blur-xl">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <MessageSquare size={18} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Quick Response
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        I typically respond within 24–48 hours. For faster
                        communication, you can reach me directly on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Project Enquiry
                  </p>

                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Tell me about your project
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Share the basics and I'll get back to you with the next
                    steps.
                  </p>
                </div>

                {success && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-300">
                    <CheckCircle className="mt-0.5 shrink-0" size={20} />

                    <div>
                      <p className="font-semibold">
                        Message sent successfully!
                      </p>

                      <p className="mt-1 text-sm text-emerald-200/70">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-red-300">
                    <MessageSquare className="mt-0.5 shrink-0" size={20} />

                    <div>
                      <p className="font-semibold">
                        Unable to send message
                      </p>

                      <p className="mt-1 text-sm text-red-200/70">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME + EMAIL */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          autoComplete="name"
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.nameError)}
                          className={`w-full rounded-xl border bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                            errors.nameError
                              ? "border-red-400/50 focus:border-red-400"
                              : "border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                          }`}
                        />
                      </div>

                      {errors.nameError && (
                        <p className="mt-2 text-xs text-red-400">
                          {errors.nameError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <AtSign
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          autoComplete="email"
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.emailError)}
                          className={`w-full rounded-xl border bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 ${
                            errors.emailError
                              ? "border-red-400/50 focus:border-red-400"
                              : "border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                          }`}
                        />
                      </div>

                      {errors.emailError && (
                        <p className="mt-2 text-xs text-red-400">
                          {errors.emailError}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* BUDGET + TYPE */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Project Budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-200 outline-none transition focus:border-cyan-400/50"
                      >
                        <option>Below ₦200,000</option>
                        <option>₦200,000 - ₦500,000</option>
                        <option>₦500,000 - ₦800,000</option>
                        <option>₦800,000 - ₦1,500,000</option>
                        <option>₦1,500,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-slate-200 outline-none transition focus:border-cyan-400/50"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Tell Me About Your Project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me what you want to build, the problem you want to solve, important features, deadline, or anything else that may help..."
                      aria-invalid={Boolean(errors.messageError)}
                      className={`w-full resize-none rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 ${
                        errors.messageError
                          ? "border-red-400/50 focus:border-red-400"
                          : "border-white/10 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                      }`}
                    />

                    {errors.messageError && (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.messageError}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {sending ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Project Enquiry
                        <Send
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Your information is only used to respond to your project
                    enquiry.
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="px-6 py-20 sm:px-10 lg:px-16">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 px-7 py-12 backdrop-blur-2xl sm:px-12 sm:py-16 lg:px-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]" />

              <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Have An Idea?
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Need a website that helps your business grow?
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    Let's turn your idea into a professional digital
                    experience that your customers can actually use.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a
                    href="https://wa.me/2348144331503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#20bd5b]"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Me
                  </a>

                  <a
                    href="mailto:omodeletemitope12@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Mail size={18} />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2348144331503"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-110 hover:bg-[#20bd5b]"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M16.001 3.2C9.04 3.2 3.4 8.84 3.4 15.8c0 2.22.58 4.3 1.6 6.1L3.2 28.8l7.08-1.76a12.56 12.56 0 0 0 5.72 1.36h.001c6.96 0 12.6-5.64 12.6-12.6S22.96 3.2 16.001 3.2Z"
            fill="currentColor"
          />

          <path
            d="M22.4 18.3c-.35-.18-2.08-1.03-2.4-1.15-.32-.12-.55-.18-.78.18-.23.35-.9 1.15-1.1 1.39-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.72-1.03-.92-1.72-2.06-1.92-2.4-.2-.35-.02-.54.15-.72.16-.16.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.89-1.07-2.59-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.92.43-.32.35-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.18.23 2.42 3.7 5.87 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.08-.85 2.37-1.67.29-.82.29-1.52.2-1.67-.09-.15-.32-.23-.67-.4Z"
            fill="white"
          />
        </svg>
      </a>

      <Footer />
    </>
  );
}

export default Contact;