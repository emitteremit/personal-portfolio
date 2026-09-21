
import React, { useState } from "react";
import {
    ChevronDown,
    Code2,
    RefreshCw,
    ShoppingCart,
    Server,
    Wrench,
    Palette,
    Mail,
    CreditCard,
    Megaphone,
    FileText,
    Image,
    LayoutDashboard,
} from "lucide-react";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import Background from "./Background";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const Services = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const services = [
        {
            id: "01",
            title: "Website Development",
            description:
                "Business websites built around what you actually need — responsive, fast, easy to use, and ready for real customers.",
            icon: Code2,
            tags: ["React", "Next.js", "Responsive"],
        },
        {
            id: "02",
            title: "Website Redesign",
            description:
                "Give an outdated website a proper refresh with a cleaner interface, better mobile experience, improved structure, and stronger performance.",
            icon: RefreshCw,
            tags: ["UI Refresh", "UX", "Performance"],
        },
        {
            id: "03",
            title: "E-commerce Websites",
            description:
                "Online stores where customers can browse products, add items to their cart, place orders, and interact with your business.",
            icon: ShoppingCart,
            tags: ["Products", "Orders", "Payments"],
        },
        {
            id: "04",
            title: "Web Applications",
            description:
                "Custom web applications for businesses that need dashboards, management systems, customer portals, booking systems, or other custom functionality.",
            icon: LayoutDashboard,
            tags: ["Dashboards", "Systems", "Custom"],
        },
        {
            id: "05",
            title: "Backend & API Development",
            description:
                "The backend that powers your application — APIs, databases, authentication, business logic, and integrations.",
            icon: Server,
            tags: ["Node.js", "MongoDB", "REST API"],
        },
        {
            id: "06",
            title: "Business Email Setup",
            description:
                "Professional email addresses using your business domain, such as info@yourbusiness.com, sales@yourbusiness.com, and support@yourbusiness.com.",
            icon: Mail,
            tags: ["Domain Email", "Setup", "Business"],
        },
        {
            id: "07",
            title: "Business Card Design",
            description:
                "Clean and professional business card designs that give your business a consistent and credible identity.",
            icon: CreditCard,
            tags: ["Front & Back", "Print Ready", "Branding"],
        },
        {
            id: "08",
            title: "Flyer & Poster Design",
            description:
                "Promotional flyers and posters for products, events, services, offers, announcements, and business campaigns.",
            icon: Megaphone,
            tags: ["Flyers", "Posters", "Promotions"],
        },
        {
            id: "09",
            title: "Social Media Graphics",
            description:
                "Branded graphics for Instagram, Facebook, WhatsApp, LinkedIn, and other platforms to keep your business looking consistent online.",
            icon: Image,
            tags: ["Social Posts", "Ads", "Banners"],
        },
        {
            id: "10",
            title: "Brochure & Company Profile",
            description:
                "Professional brochures and company profile designs that present your business, services, products, and information clearly.",
            icon: FileText,
            tags: ["Brochures", "Company Profile", "Print"],
        },
        {
            id: "11",
            title: "Brand Graphics",
            description:
                "Supporting visual assets for your business, including promotional materials, banners, adverts, presentation graphics, and branded documents.",
            icon: Palette,
            tags: ["Brand Assets", "Banners", "Marketing"],
        },
        {
            id: "12",
            title: "Website Maintenance",
            description:
                "Keep your existing website running properly with updates, bug fixes, content changes, improvements, and ongoing technical support.",
            icon: Wrench,
            tags: ["Bug Fixes", "Updates", "Support"],
        },
    ];

    const process = [
        {
            number: "01",
            title: "We talk",
            text: "You tell me what you're trying to build, improve, or design. No complicated technical explanation is required.",
        },
        {
            number: "02",
            title: "I plan it",
            text: "I break down what is needed, recommend an approach, and give you a clear idea of the work involved.",
        },
        {
            number: "03",
            title: "I build it",
            text: "Development or design starts, with progress updates along the way so you know what is happening.",
        },
        {
            number: "04",
            title: "We launch",
            text: "After the final checks and adjustments, your website, design, or business setup is ready to use.",
        },
    ];

    const faqs = [
        {
            question: "How long does a website take?",
            answer:
                "It depends on the size and functionality of the project. A straightforward business website can take a few weeks, while larger websites and web applications can take longer. Once I understand the scope, I'll give you a realistic timeline.",
        },
        {
            question: "How much does a website cost?",
            answer:
                "There isn't one fixed price because every project is different. The cost depends on the number of pages, features, integrations, design requirements, and the amount of custom development involved.",
        },
        {
            question: "Can you redesign my existing website?",
            answer:
                "Yes. I can redesign an existing website, improve its structure and interface, make it more responsive, improve the user experience, and work on its overall performance.",
        },
        {
            question: "Do you build e-commerce websites?",
            answer:
                "Yes. I can build online stores with product listings, categories, shopping carts, order management, payment integrations, and other features required by the business.",
        },
        {
            question: "Do you build the backend too?",
            answer:
                "Yes. I'm a full-stack developer, so I can handle both the frontend and backend, including APIs, databases, authentication, business logic, and third-party integrations.",
        },
        {
            question: "Can you set up a business email?",
            answer:
                "Yes. I can help set up professional email addresses using your business domain, such as info@yourbusiness.com, sales@yourbusiness.com, or support@yourbusiness.com.",
        },
        {
            question: "Do you also do graphic design?",
            answer:
                "Yes. I provide business-focused graphic design services including business cards, flyers, posters, social media graphics, brochures, company profiles, banners, and other promotional materials.",
        },
        {
            question: "Can I hire you for just a flyer or business card?",
            answer:
                "Yes. You don't need to hire me for a full website to use the design services. Individual graphics and design projects are also available.",
        },
        {
            question: "Can you work on a website another developer built?",
            answer:
                "Yes. I can work on existing projects to fix bugs, add features, improve the interface, make changes, or continue development from where the previous developer stopped.",
        },
        {
            question: "What technologies do you use?",
            answer:
                "I mainly work with React, JavaScript, Next.js, Tailwind CSS, Node.js, Express, MongoDB, and REST APIs. The exact technology depends on what the project requires.",
        },
        {
            question: "Do you provide support after launch?",
            answer:
                "Yes. I can provide maintenance, bug fixes, updates, content changes, improvements, and other technical support after the project goes live.",
        },
    ];

    return (
        <>
            <Header />

            <Background />

            <main className="relative z-10 min-h-screen bg-slate-950/40 text-white">
                {/* HERO */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-24 md:pt-40 md:pb-32">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-8 h-px bg-teal-400" />

                            <span className="text-xs font-medium uppercase tracking-[0.22em] text-teal-400">
                                Services
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.05]">
                            Websites, design &
                            <br />
                            <span className="text-slate-500">
                                digital services for business.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base md:text-lg text-slate-400 leading-8">
                            From building your website to creating your business
                            graphics and setting up professional email, I help
                            businesses get the digital pieces they need in place.
                        </p>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pb-32">
                    <div className="flex items-center gap-5 mb-10">
                        <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                            What I offer
                        </h2>

                        <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.id}
                                    className="group relative min-h-[315px] rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-sm p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/70"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-colors duration-300 group-hover:text-teal-400 group-hover:border-teal-400/30">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <span className="font-mono text-xs text-slate-700">
                                            {service.id}
                                        </span>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-xl font-medium text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-400">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-slate-800 px-3 py-1 text-[11px] text-slate-500"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* GRAPHIC DESIGN */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pb-32">
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/60 backdrop-blur-sm overflow-hidden">
                        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                            <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-800">
                                <div className="flex items-center gap-3 mb-6">
                                    <Palette
                                        size={19}
                                        className="text-teal-400"
                                    />

                                    <span className="text-xs uppercase tracking-[0.2em] text-teal-400">
                                        Graphic Design
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                                    Your business should
                                    <br />
                                    <span className="text-slate-500">
                                        look the part too.
                                    </span>
                                </h2>

                                <p className="mt-6 text-sm md:text-base text-slate-400 leading-7 max-w-md">
                                    I create practical business graphics that
                                    you can actually use — whether you're
                                    promoting a service, opening a business,
                                    running an event, or building your brand.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2">
                                {[
                                    {
                                        icon: CreditCard,
                                        title: "Business Cards",
                                        text: "Professional cards for your business and team.",
                                    },
                                    {
                                        icon: Megaphone,
                                        title: "Flyers & Posters",
                                        text: "Promotional designs for offers, events, and services.",
                                    },
                                    {
                                        icon: Image,
                                        title: "Social Media",
                                        text: "Branded posts, adverts, banners, and promotional graphics.",
                                    },
                                    {
                                        icon: FileText,
                                        title: "Brochures",
                                        text: "Company profiles, service brochures, and business documents.",
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="p-7 md:p-9 border-b border-slate-800 sm:nth-[2n]:border-l"
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={1.6}
                                                className="text-slate-400"
                                            />

                                            <h3 className="mt-6 text-base font-medium text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* BUSINESS EMAIL */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pb-32">
                    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 px-7 py-12 md:px-12 md:py-14">
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-400/5 blur-3xl" />

                        <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <Mail
                                        size={19}
                                        className="text-teal-400"
                                    />

                                    <span className="text-xs uppercase tracking-[0.2em] text-teal-400">
                                        Business Email
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                                    Stop using a personal email
                                    <br className="hidden md:block" />
                                    <span className="text-slate-500">
                                        for your business.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm md:text-base leading-7 text-slate-400">
                                    I can help you set up professional email
                                    addresses using your own domain, giving
                                    your business a more consistent and
                                    professional way to communicate with
                                    customers.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
                                {[
                                    "info@yourbusiness.com",
                                    "sales@yourbusiness.com",
                                    "support@yourbusiness.com",
                                ].map((email) => (
                                    <span
                                        key={email}
                                        className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-xs text-slate-400"
                                    >
                                        {email}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pb-32">
                    <div className="border-y border-slate-800 py-20 md:py-24">
                        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-6 h-px bg-teal-400" />

                                    <span className="text-xs uppercase tracking-[0.2em] text-teal-400">
                                        How I work
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                                    No complicated
                                    <br />
                                    <span className="text-slate-500">
                                        process.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm md:text-base text-slate-400 leading-7">
                                    You don't need to know the technical side
                                    of things. Tell me what you need, and I'll
                                    help figure out the best way to get it
                                    done.
                                </p>
                            </div>

                            <div>
                                {process.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className={`grid grid-cols-[48px_1fr] gap-5 py-7 ${
                                            index !== process.length - 1
                                                ? "border-b border-slate-800"
                                                : ""
                                        }`}
                                    >
                                        <span className="font-mono text-xs text-teal-400 pt-1">
                                            {step.number}
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-medium text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-4xl mx-auto px-6 md:px-8 pb-32">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-6 h-px bg-teal-400" />

                            <span className="text-xs uppercase tracking-[0.2em] text-teal-400">
                                FAQ
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
                            Before we start.
                        </h2>

                        <p className="mt-5 text-sm md:text-base text-slate-500">
                            A few things clients usually ask before starting a
                            project.
                        </p>
                    </div>

                    <div className="border-t border-slate-800">
                        {faqs.map((faq, index) => {
                            const isOpen = openFAQ === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-slate-800"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFAQ(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="w-full flex items-center justify-between gap-6 py-6 text-left"
                                    >
                                        <span className="text-base md:text-lg text-slate-200">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={18}
                                            className={`flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                                                isOpen
                                                    ? "rotate-180 text-teal-400"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-6 pr-10 text-sm leading-7 text-slate-500">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-6xl mx-auto px-6 md:px-8 pb-28">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 px-7 py-14 md:px-14 md:py-16">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-400/5 blur-3xl" />

                        <div className="relative max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-teal-400">
                                Have something in mind?
                            </p>

                            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                                Let's get your
                                <br />
                                <span className="text-slate-500">
                                    project moving.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-slate-400">
                                Whether it's a website, business graphic,
                                professional email, or a custom web
                                application, send me the details and let's
                                talk about it.
                            </p>

                            <a
                                href="/contact"
                                className="inline-flex items-center mt-8 rounded-lg bg-teal-400 px-6 py-3.5 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-teal-300"
                            >
                                Get in touch
                                <span className="ml-3 text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Services;