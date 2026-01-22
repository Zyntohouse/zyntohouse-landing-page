import { Linkedin, Twitter, Mail, ArrowRight, Heart } from 'lucide-react';

// Building Blocks Logomark Component
const LogoMark = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(14, 13)">
      <rect x="0" y="0" width="52" height="16" rx="4" fill="#10b981" />
      <rect x="14" y="22" width="38" height="16" rx="4" fill="#10b981" opacity="0.7" />
      <rect x="0" y="44" width="52" height="16" rx="4" fill="#10b981" />
    </g>
  </svg>
);

export const FooterComponent = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse, hsl(160 84% 39% / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(160 84% 39% / 0.5), transparent)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* CTA Card */}
        <div className="relative mb-16 p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(135deg, hsl(160 84% 39% / 0.1), transparent 50%)',
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ready to automate your chaos?
              </h3>
              <p className="text-zinc-400">
                Book a free discovery call. No pitch, just clarity.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary-light transition-all duration-300 group whitespace-nowrap"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark className="w-10 h-10" />
              <span className="text-2xl font-bold">
                <span className="text-primary">Z</span>
                <span className="text-foreground">yntohouse</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              We build internal tools and AI automation for businesses drowning in manual work.
              Save time. Cut costs. Scale faster.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:zyntohouse@gmail.com"
                className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {['Custom CRM', 'AI Automation', 'Dashboards', 'Process Automation'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-zinc-500 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div >

          {/* Company Column */}
          < div >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Case Study', href: '#case-study' },
                { name: 'About Us', href: '#about' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-zinc-500 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul >
          </div >

          {/* Contact Column */}
          < div >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:zyntohouse@gmail.com"
                className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600">Email</p>
                  <p className="text-sm">zyntohouse@gmail.com</p>
                </div>
              </a>
              <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-800">
                <p className="text-xs text-zinc-500 mb-2">Response time</p>
                <p className="text-lg font-semibold text-foreground">Under 24 hours</p>
              </div>
            </div >
          </div >
        </div >

        {/* Bottom Bar */}
        < div className="pt-8 border-t border-zinc-800" >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Zyntohouse. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div >
      </div >
    </footer >
  );
};