import React from "react";

// Accruon About Us - Single-file React component (Tailwind CSS required)
// Instructions:
// 1) This component uses Tailwind CSS classes. Make sure Tailwind is configured in your project.
// 2) Replace placeholder image paths (public/) with actual images or remote URLs.
// 3) Break into smaller components if desired. This file aims to visually match the reference About Us page.

export default function AccruonAboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Top bar / Header */}
      <header className="shadow-sm bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-3">
              {/* Placeholder logo */}
              <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">A</div>
              <div className="hidden sm:block">
                <div className="font-semibold">Accruon Technologies</div>
                <div className="text-xs text-slate-500">Innovate. Automate. Accelerate.</div>
              </div>
            </a>

            <nav className="hidden md:flex gap-6 items-center text-sm">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="/services" className="hover:text-indigo-600">Services</a>
              <a href="/about-us" className="text-indigo-600 font-medium">About Us</a>
              <a href="/careers" className="hover:text-indigo-600">Careers</a>
              <a href="/contact" className="hover:text-indigo-600">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="/contact" className="hidden sm:inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Get in touch</a>
              <button className="md:hidden p-2 rounded-md border">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Breadcrumb */}
      <section className="relative bg-[url('/images/about-hero.jpg')] bg-cover bg-center" style={{backgroundColor:'#0f172a'}}>
        <div className="bg-black/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="text-white max-w-3xl">
              <p className="text-sm uppercase tracking-wide text-indigo-300">About Us</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-4">We build technology products that accelerate growth</h1>
              <p className="mt-6 text-slate-200 text-lg">Accruon Technologies designs, develops and deploys modern software products and digital transformation solutions for enterprises and startups.</p>

              <div className="mt-8 flex gap-3">
                <a href="/contact" className="inline-block bg-indigo-600 px-5 py-3 rounded text-sm font-medium">Talk to us</a>
                <a href="/services" className="inline-block border border-slate-200 px-5 py-3 rounded text-sm text-white/90">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Who we are</h2>
            <p className="mt-4 text-slate-600">Accruon Technologies is a team of skilled engineers, strategists and designers focused on delivering scalable solutions. From concept to launch, we partner with clients to craft delightful digital experiences that drive measurable results.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 items-start">
                <div className="p-2 bg-indigo-50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Product engineering</div>
                  <div className="text-sm text-slate-500">End-to-end product development — web, mobile and cloud.</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="p-2 bg-indigo-50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Cloud & DevOps</div>
                  <div className="text-sm text-slate-500">Reliable deployments and scalable infrastructure.</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="p-2 bg-indigo-50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Design & UX</div>
                  <div className="text-sm text-slate-500">Human-centered design to improve engagement and retention.</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="p-2 bg-indigo-50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Support & Maintenance</div>
                  <div className="text-sm text-slate-500">Long-term product care to ensure stability and improvements.</div>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <a href="/contact" className="inline-block bg-slate-900 text-white px-5 py-3 rounded">Let's talk</a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/about-team.jpg" alt="team" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold">100+</div>
              <div className="text-sm text-slate-600">Projects delivered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">50+</div>
              <div className="text-sm text-slate-600">Happy clients</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">20+</div>
              <div className="text-sm text-slate-600">Team members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border rounded-lg">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-4 text-slate-600">To help organizations create meaningful digital products that deliver measurable value and foster growth through sustainable engineering practices.</p>
            <ul className="mt-4 list-disc list-inside text-slate-500">
              <li>Deliver high-quality software</li>
              <li>Empower teams with modern tooling</li>
              <li>Focus on measurable outcomes</li>
            </ul>
          </div>

          <div className="p-8 border rounded-lg">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="mt-4 text-slate-600">To become a trusted partner for businesses worldwide by combining technology, design and domain expertise that accelerates customer success.</p>
            <div className="mt-4">
              <a href="/services" className="inline-block border px-4 py-2 rounded">See Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Leadership</h2>
          <p className="text-center text-slate-500 mt-3">Experienced leaders guiding product and engineering excellence.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Anil Kumar", role: "Founder & CEO", img: "/images/team-1.jpg" },
              { name: "Sahana Nair", role: "Head of Product", img: "/images/team-2.jpg" },
              { name: "Ravi Menon", role: "CTO", img: "/images/team-3.jpg" },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="mt-4 font-semibold">{p.name}</h4>
                <div className="text-sm text-slate-500">{p.role}</div>
                <p className="mt-3 text-sm text-slate-500">A short bio about {p.name} and their expertise. Replace with real content.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients / Logos */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h3 className="text-lg font-semibold text-center">Trusted by</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          <div className="h-12 flex items-center justify-center"><img src="/images/logo1.png" alt="logo1" className="max-h-10 object-contain"/></div>
          <div className="h-12 flex items-center justify-center"><img src="/images/logo2.png" alt="logo2" className="max-h-10 object-contain"/></div>
          <div className="h-12 flex items-center justify-center"><img src="/images/logo3.png" alt="logo3" className="max-h-10 object-contain"/></div>
          <div className="h-12 flex items-center justify-center"><img src="/images/logo4.png" alt="logo4" className="max-h-10 object-contain"/></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Want to build something together?</h4>
            <p className="mt-2 text-slate-100/90">Tell us about your project and we'll get back with a plan.</p>
          </div>
          <div>
            <a href="/contact" className="inline-block bg-white text-indigo-600 px-5 py-3 rounded-md font-medium">Contact us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">A</div>
              <div>
                <div className="font-semibold text-white">Accruon Technologies</div>
                <div className="text-sm">Innovate. Automate. Accelerate.</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">We build digital products and provide engineering teams to companies that want to scale.</p>
          </div>

          <div>
            <h5 className="font-semibold text-white">Company</h5>
            <ul className="mt-3 text-sm text-slate-400 space-y-2">
              <li><a href="/about-us" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Contact</h5>
            <div className="mt-3 text-sm text-slate-400">
              <div>123 Business Street</div>
              <div>City, State, 12345</div>
              <div className="mt-2">Email: <a href="mailto:info@accruontechnologies.com" className="hover:text-white">info@accruontechnologies.com</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-sm text-slate-500 text-center">© {new Date().getFullYear()} Accruon Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
