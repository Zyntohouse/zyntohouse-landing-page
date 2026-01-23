import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Earlier I used to spend hours on vouchers and WhatsApp messages. Now one click and it's done. This dashboard has genuinely transformed how we run TBK Villas.",
    highlight: "one click and it's done",
    name: "Jairaj Kamani",
    role: "Founder",
    company: "TBK Villas",
    industry: "Luxury Villa Rentals",
    avatar: "J",
    rating: 5,
    results: "4hrs saved daily",
  },
  {
    quote: "We went from chaos to complete clarity in just 3 weeks. Our team actually enjoys using the CRM now.",
    highlight: "chaos to complete clarity",
    name: "Priya Mehta",
    role: "Operations Head",
    company: "CoachPro",
    industry: "EdTech",
    avatar: "P",
    rating: 5,
    results: "2x lead conversion",
  },
  {
    quote: "The WhatsApp automation alone saved us 4 hours every single day. Best investment we've made this year.",
    highlight: "4 hours every single day",
    name: "Amit Patel",
    role: "CEO",
    company: "FinanceHub",
    industry: "Fintech",
    avatar: "A",
    rating: 5,
    results: "₹8L+ tracked monthly",
  },
];

const trustedBrands = [
  'TBK Villas',
  'CoachPro',
  'FinanceHub',
  'EventFlow',
  'StartupX',
  'GrowthLabs',
  'ScaleUp',
  'BuildFast',
];

// Infinite Marquee Component
const InfiniteMarquee = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex animate-marquee">
        {/* First set */}
        {trustedBrands.map((brand, i) => (
          <div key={`first-${i}`} className="flex items-center mx-8 md:mx-12">
            <span className="text-xl md:text-2xl font-semibold text-zinc-600 hover:text-primary transition-colors duration-300 whitespace-nowrap cursor-default">
              {brand}
            </span>
            <span className="ml-8 md:ml-12 text-zinc-800">•</span>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {trustedBrands.map((brand, i) => (
          <div key={`second-${i}`} className="flex items-center mx-8 md:mx-12">
            <span className="text-xl md:text-2xl font-semibold text-zinc-600 hover:text-primary transition-colors duration-300 whitespace-nowrap cursor-default">
              {brand}
            </span>
            <span className="ml-8 md:ml-12 text-zinc-800">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-primary/5 pointer-events-none">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/5 pointer-events-none rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Loved by{' '}
            <span className="text-gradient-accent">Businesses</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Don't just take our word for it
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                <Quote className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-foreground leading-relaxed mb-8">
              "{testimonials[activeIndex].quote.split(testimonials[activeIndex].highlight)[0]}
              <span className="text-gradient-accent">{testimonials[activeIndex].highlight}</span>
              {testimonials[activeIndex].quote.split(testimonials[activeIndex].highlight)[1]}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl font-bold text-primary">{testimonials[activeIndex].avatar}</span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-zinc-500">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">{testimonials[activeIndex].results}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-zinc-800">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex
                      ? 'w-8 bg-primary'
                      : 'bg-zinc-700 hover:bg-zinc-600'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${i === activeIndex
                ? 'border-primary/50 bg-primary/5'
                : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${i === activeIndex
                  ? 'bg-primary/20 text-primary'
                  : 'bg-zinc-800 text-zinc-400'
                  }`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 line-clamp-2">"{testimonial.quote}"</p>
            </button>
          ))}
        </div>

        {/* Trust bar with Infinite Marquee */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <p className="text-sm text-zinc-600 text-center mb-8">Trusted by growing businesses across India</p>
          <InfiniteMarquee />
        </div>
      </div>
    </section>
  );
};