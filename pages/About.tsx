import React from 'react';
import { ArrowRight, Brain, Sparkles, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Mission */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center bg-background-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">Our Mission</span>
          <h1 className="text-5xl font-black tracking-tighter text-text-main sm:text-6xl md:text-7xl">
            Empowering Brands Through Strategic Digital Growth</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-sub font-normal leading-relaxed">
            We don't just post content. We build digital ecosystems that drive real business results, focusing on clarity, precision, and measurable impact.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-black tracking-tight text-text-main">Our Story</h2>
                <p className="text-lg leading-relaxed text-text-sub">
                  Founded on the belief that digital presence is the new storefront, Divines_Code began as a boutique experiment in visual storytelling. We noticed a gap in the market: agencies were chasing vanity metrics while brands needed tangible growth.
                </p>
                <p className="text-lg leading-relaxed text-text-sub">
                  We pivoted to focus deeply on the Instagram ecosystem, committing to real connections over bought followers. From humble origins to a powerhouse of digital creativity, our journey has been defined by one core principle: Authenticity scales.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://picsum.photos/800/600?random=20" 
                  alt="Office workspace" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-background-off">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-text-main md:text-4xl">Core Values</h2>
            <p className="max-w-xl text-text-sub">Our guiding principles that drive every campaign, pixel, and strategy.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "Strategy First", text: "We prioritize long-term goals over quick wins. Every action is backed by data and aligned with your brand's north star." },
              { icon: Sparkles, title: "Creative Excellence", text: "Delivering premium quality visuals. We believe that aesthetics function as trust signals in the digital age." },
              { icon: Eye, title: "Transparent Growth", text: "Real data, no hidden metrics. We provide clear, honest reporting so you always know your ROI." }
            ].map((val, i) => (
              <div key={i} className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <val.icon size={24} />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-text-main">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-text-sub">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-text-main mb-4">Meet the Minds</h2>
            <p className="text-text-sub">The strategists and creators behind your growth.</p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Alex Rivera", role: "Creative Director", img: 30 },
              { name: "Jordan Lee", role: "Growth Strategist", img: 31 },
              { name: "Casey Smith", role: "Account Manager", img: 32 }
            ].map((member, i) => (
              <div key={i} className="group relative flex flex-col gap-4">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                  <img src={`https://picsum.photos/600/800?random=${member.img}`} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-text-main">{member.name}</h3>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;