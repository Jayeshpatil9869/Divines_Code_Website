import React from 'react';
import { ArrowRight, Brain, Sparkles, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Mission */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center bg-background-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">The Mission</span>
          <h1 className="text-5xl font-black tracking-tighter text-text-main sm:text-6xl md:text-7xl">
            We Help You Get Attention. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">The Good Kind.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-sub font-normal leading-relaxed">
            There are enough people posting boring content. We're here to make sure you're not one of them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-black tracking-tight text-text-main">Why Divines_Code</h2>
                <p className="text-lg leading-relaxed text-text-sub">
                  I started Divines_Code for one simple reason: I was tired of seeing talented brands get zero views because of bad advice.
                </p>
                <p className="text-lg leading-relaxed text-text-sub">
                  Most "agencies" are run by people who have never grown an account past 1,000 followers. They sell templates.
                </p>
                <p className="text-lg leading-relaxed text-text-sub">
                  I took a different route. I built my own presence to **185K+ followers** first. I learned the hard way what works—what audio trends, what hook structures, and what edit styles actually stop the scroll. Divines_Code is just me sharing that playbook with you.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] group">
                <img
                  src="/divinesCode.png"
                  alt="Sanket working"
                  loading="lazy"
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
            <h2 className="text-3xl font-bold text-text-main md:text-4xl">How We Operate</h2>
            <p className="max-w-xl text-text-sub">No corporate buzzwords. Just the rules we live by.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "No Buying Followers", text: "Ever. It kills your account. We only focus on real, organic humans who actually care about what you sell." },
              { icon: Sparkles, title: "Quality Over Quantity", text: "Posting 3 times a day is useless if the content sucks. We'd rather post 3 times a week with bangers." },
              { icon: Eye, title: "Complete Honesty", text: "If a video flops, we tell you why. If a strategy isn't working, we change it. No sugarcoating reports." }
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
            <h2 className="text-4xl font-black text-text-main mb-4">Who You're Working With</h2>
            <p className="text-text-sub">Real people, not a faceless corporation.</p>
          </div>
          <div className="flex justify-center">
            <div className="group relative flex flex-col gap-4 max-w-sm">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                <img src="/myimage.jpg" alt="Sanket" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-text-main">Sanket</h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wide">Founder & Lead Strategist</p>
                <p className="mt-2 text-sm text-text-sub">185K+ Instagram Followers. Obsessed with algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;