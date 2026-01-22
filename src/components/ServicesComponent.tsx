import { Wrench, Bot, BarChart3, Zap, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Custom Internal Tools',
    description: 'Tools tailored to how YOUR business actually works. No more forcing your workflow into generic software.',
    features: ['CRM Systems', 'Inventory Management', 'Booking Platforms', 'Admin Dashboards'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Let AI handle the repetitive stuff while you focus on growing your business.',
    features: ['WhatsApp Bots', 'Auto Follow-ups', 'Smart Reminders', 'Lead Scoring'],
  },
  {
    icon: BarChart3,
    title: 'Business Dashboards',
    description: 'See your entire business in one screen. Real-time data, zero spreadsheets.',
    features: ['Live Analytics', 'Custom Reports', 'KPI Tracking'],
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Connect your tools. Automate your chaos. Save hours every week.',
    features: ['Workflow Automation', 'App Integrations', 'Smart Notifications'],
  },
];

// Mini preview components
const CRMPreview = () => (
  <div className="space-y-2">
    {[
      { name: 'Rahul Sharma', status: 'Hot Lead', bgColor: 'bg-emerald-500/20', textColor: 'text-emerald-400' },
      { name: 'Priya Patel', status: 'Follow-up', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-400' },
      { name: 'Amit Kumar', status: 'New', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' },
    ].map((lead, i) => (
      <div key={i} className="flex items-center justify-between p-2.5 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center text-xs font-semibold text-zinc-200">
            {lead.name[0]}
          </div>
          <div>
            <span className="text-sm text-zinc-200 font-medium">{lead.name}</span>
            <p className="text-[10px] text-zinc-500">Added 2h ago</p>
          </div>
        </div>
        <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${lead.bgColor} ${lead.textColor}`}>
          {lead.status}
        </span>
      </div>
    ))}
    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
      <span className="text-[10px] text-zinc-500">3 of 847 leads</span>
      <span className="text-[10px] text-primary cursor-pointer hover:underline">View all →</span>
    </div>
  </div>
);

const BotPreview = () => (
  <div className="space-y-2">
    <div className="flex gap-2">
      <div className="w-6 h-6 rounded-full bg-zinc-700 flex-shrink-0" />
      <div className="bg-zinc-800 rounded-lg rounded-tl-none p-2 text-xs text-zinc-400">
        Hi! I'm interested in your 3BHK villa
      </div>
    </div>
    <div className="flex gap-2 justify-end">
      <div className="bg-primary/20 border border-primary/30 rounded-lg rounded-tr-none p-2 text-xs text-primary">
        Great! Let me share the details & schedule a visit 🏡
      </div>
      <div className="w-6 h-6 rounded-full bg-primary/30 flex-shrink-0 flex items-center justify-center">
        <Bot className="w-3 h-3 text-primary" />
      </div>
    </div>
  </div>
);

const DashboardPreview = () => (
  <div className="space-y-2">
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Revenue', value: '₹12.4L' },
        { label: 'Leads', value: '847' },
        { label: 'Conv.', value: '24%' },
      ].map((stat, i) => (
        <div key={i} className="bg-zinc-800/50 rounded-lg p-2 text-center">
          <p className="text-[10px] text-zinc-500">{stat.label}</p>
          <p className="text-sm font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="h-12 bg-zinc-800/50 rounded-lg flex items-end p-2 gap-1">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
        <div key={i} className="flex-1 bg-primary/60 rounded-sm" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

export const ServicesComponent = () => {
  const Icon1 = services[0].icon;
  const Icon2 = services[1].icon;
  const Icon3 = services[2].icon;
  const Icon4 = services[3].icon;

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(200 80% 50% / 0.3), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What We{' '}
            <span className="text-gradient-accent">Build</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Solutions that solve real problems, not add to them.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 - Large with CRM Preview */}
          <div className="group relative lg:col-span-2 lg:row-span-2 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-lg shadow-primary/10 group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300">
                <Icon1 className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {services[0].title}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {services[0].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {services[0].features.map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-sm text-zinc-300"
                  >
                    <Check className="w-3 h-3 text-primary" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* CRM Preview */}
              <div className="mt-auto p-4 rounded-xl bg-zinc-800/30 border border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zinc-400">Lead Management</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary">Live Preview</span>
                </div>
                <CRMPreview />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10 group-hover:scale-110 transition-all duration-300">
                <Icon2 className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {services[1].title}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                {services[1].description}
              </p>

              <div className="p-3 rounded-lg bg-zinc-800/30 border border-zinc-800">
                <BotPreview />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10 group-hover:scale-110 transition-all duration-300">
                <Icon3 className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {services[2].title}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                {services[2].description}
              </p>

              <div className="p-3 rounded-lg bg-zinc-800/30 border border-zinc-800">
                <DashboardPreview />
              </div>
            </div>
          </div>

          {/* Card 4 - Wide */}
          <div className="group relative lg:col-span-2 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Icon4 className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {services[3].title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                  {services[3].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {services[3].features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-sm text-zinc-300"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/30 border border-zinc-800">
                <div className="flex items-center gap-2">
                  {['📱', '→', '🤖', '→', '📊', '→', '📧'].map((item, i) => (
                    <span key={i} className={item === '→' ? 'text-zinc-600 text-xs' : 'text-xl'}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - CTA Card */}
          <div className="group relative p-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Not sure what you need?
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Let's figure it out together. Free consultation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-light transition-colors group/btn"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};