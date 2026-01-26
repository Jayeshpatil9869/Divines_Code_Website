import React from 'react';
import { Film, Megaphone, Handshake, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary leading-[1.1]">
            We Don't Sell <span className="text-neutral-400">"Packages"</span>.<br />
            We Sell <span className="text-primary">Execution</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
            Everything we do is designed to get eyes on your brand and move numbers. No fluff. No busy work.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              icon: Film,
              title: "Reels That Actually Convert",
              desc: "Most editors just cut clips. We engineer retention. We study the current meta of Instagram audio and visual hooks to ensure your video is watched until the end.",
              points: ["Viral Hook Writing", "Retention-Focused Editing", "Trending Audio Selection", "Vertical-First Typography"]
            },
            {
              icon: Megaphone,
              title: "Brand Promotion",
              desc: "Stop boosting posts to random people. We build specific campaigns targetted at YOUR ideal customer avatar. We focus on ROI, not just 'reach'.",
              points: ["Avatar targeting", "Ad Creative Strategy", "Campaign Optimization", "budget Allocation"]
            },
            {
              icon: Handshake,
              title: "Influencer Management",
              desc: "We screen influencers for fake followers and engagement pod usage. We only partner you with creators who actually influence their audience.",
              points: ["Deep Audit & Vetting", "Contract & deliverables", "Creative Briefing", "Performance Tracking"]
            },
            {
              icon: Users,
              title: "Full Account Management",
              desc: "We become your social media department. We reply to comments, engage with community, post stories, and manage the chaos so you don't have to.",
              points: ["Daily Engagement", "Story Strategy", "Community Building", "Crisis Management"]
            }
          ].map((service, i) => (
            <div key={i} className="group flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-primary">
                <service.icon size={30} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
              </div>
              <ul className="mt-auto flex flex-col gap-2 pt-4">
                {service.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                    <CheckCircle size={18} className="text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Work</h2>
            <p className="text-lg text-neutral-600">We keep it simple. Here is what happens when you sign with us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-black text-neutral-200">01</div>
              <h3 className="text-xl font-bold">The Audit</h3>
              <p className="text-neutral-600">We tear your current account apart (nicely). We find what's broken, what's working, and where the low-hanging fruit is.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-black text-neutral-200">02</div>
              <h3 className="text-xl font-bold">The Strategy</h3>
              <p className="text-neutral-600">We build a content calendar based on your goals. No guessing. We decide exactly what to shoot, say, and post.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-black text-neutral-200">03</div>
              <h3 className="text-xl font-bold">The Execution</h3>
              <p className="text-neutral-600">We start posting. We watch the data daily. We iterate. We scale what works and cut what doesn't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to stop playing small?
          </h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            If you're serious about taking your brand to the next level, let's talk. No sales pressure, just a conversation about if we can help.
          </p>
          <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:scale-105 hover:bg-black active:scale-95">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;