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
            Our Expertise
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
            Strategic solutions tailored for massive Instagram growth. We transform brands into digital authorities.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              icon: Film,
              title: "Instagram Reels Creation",
              desc: "We craft high-retention short-form video content designed to go viral. From concept to final edit, we handle the entire production pipeline.",
              points: ["Scripting & Storyboarding", "High-End Editing", "Trending Audio Research"]
            },
            {
              icon: Megaphone,
              title: "Brand Promotion",
              desc: "Elevate your brand's presence with targeted paid and organic strategies. We position your business as a leader in its niche.",
              points: ["Paid Ad Strategies", "Brand Positioning", "Engagement Tactics"]
            },
            {
              icon: Handshake,
              title: "Influencer Collaborations",
              desc: "Connect with voices that resonate. We manage end-to-end campaigns with top-tier creators to amplify your message authentically.",
              points: ["Outreach Strategy", "Contract Negotiation", "Campaign Management"]
            },
            {
              icon: Users,
              title: "Account Handling",
              desc: "Full-spectrum management for peace of mind. We nurture your community and maintain consistency while you run your business.",
              points: ["Community Management", "Scheduling & Posting", "Analytics Reporting"]
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

      {/* Custom Quote */}
      <section className="bg-background-off py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Looking for something unique?
          </h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            We create custom strategies tailored to your brand’s specific needs, scaling operations specifically for your market goals.
          </p>
          <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:scale-105 hover:bg-black active:scale-95">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;