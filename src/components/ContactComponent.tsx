import { useState } from 'react';
import { Mail, Send, Phone, Clock, CheckCircle2, MessageSquare, Linkedin, Twitter, Calendar } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const benefits = [
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: CheckCircle2, text: 'Free discovery call' },
  { icon: MessageSquare, text: 'No hard selling, ever' },
];

export const ContactComponent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! 🎉",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(45 100% 60% / 0.2), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Let's Build Something{' '}
              <span className="text-gradient-accent">Great Together</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Book a free discovery call. No pitch, just clarity. We'll understand your
              business and tell you honestly if we can help.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-zinc-300">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Direct contact card */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 mb-8">
              <p className="text-sm text-zinc-500 mb-4">Prefer to reach out directly?</p>

              <div className="space-y-3">
                <a
                  href="mailto:zyntohouse@gmail.com"
                  className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="font-medium">zyntohouse@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919875338181"
                  className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Phone</p>
                    <p className="font-medium">+91 9875338181</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-500">Follow us:</span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Glow behind form */}
            <div
              className="absolute inset-0 -m-4 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(160 84% 39% / 0.08), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative p-8 md:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Book a Discovery Call</h3>
                  <p className="text-sm text-zinc-500">Takes less than 2 minutes</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={`bg-zinc-800/50 border-zinc-700 h-12 rounded-xl transition-all duration-300 placeholder:text-zinc-500 ${focused === 'name' ? 'border-primary shadow-[0_0_20px_-5px_hsl(160_84%_39%_/_0.3)]' : 'hover:border-zinc-600'
                        }`}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={`bg-zinc-800/50 border-zinc-700 h-12 rounded-xl transition-all duration-300 placeholder:text-zinc-500 ${focused === 'email' ? 'border-primary shadow-[0_0_20px_-5px_hsl(160_84%_39%_/_0.3)]' : 'hover:border-zinc-600'
                        }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Company Name (Optional)"
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                    className={`bg-zinc-800/50 border-zinc-700 h-12 rounded-xl transition-all duration-300 placeholder:text-zinc-500 ${focused === 'company' ? 'border-primary shadow-[0_0_20px_-5px_hsl(160_84%_39%_/_0.3)]' : 'hover:border-zinc-600'
                      }`}
                  />
                </div>

                <div className="relative">
                  <Textarea
                    placeholder="Tell us about your project... What problems are you facing? What would success look like?"
                    rows={5}
                    required
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className={`bg-zinc-800/50 border-zinc-700 rounded-xl resize-none transition-all duration-300 placeholder:text-zinc-500 ${focused === 'message' ? 'border-primary shadow-[0_0_20px_-5px_hsl(160_84%_39%_/_0.3)]' : 'hover:border-zinc-600'
                      }`}
                  />
                </div>

                {/* Quick options */}
                <div>
                  <p className="text-xs text-zinc-500 mb-3">I'm interested in:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Custom CRM', 'AI Automation', 'Dashboard', 'Process Automation', 'Other'].map((option, i) => (
                      <label
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-400 cursor-pointer hover:border-zinc-600 hover:text-zinc-300 transition-all has-[:checked]:border-primary/50 has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                      >
                        <input type="checkbox" name="interests" value={option} className="sr-only" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary-light text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Trust note */}
                <p className="text-xs text-zinc-600 text-center">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};