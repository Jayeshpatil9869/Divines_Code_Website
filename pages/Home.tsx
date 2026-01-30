import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film, Megaphone, Handshake, Users, ArrowRight, Star } from 'lucide-react';
import SimpleBarChart from '../components/BarChart';
import PortfolioSlider from '../components/PortfolioSlider';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background-light py-20 lg:py-32"
      >
        <div
          className="absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage: "url('/hero-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute top-40 -left-20 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]"></div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-text-sub">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Real Strategies. Real Growth.
          </span>
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-text-main sm:text-6xl md:text-7xl">
            We Build Instagram Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">That Actually Convert.</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg font-normal text-text-sub sm:text-xl">
            No bots. No fake engagement groups. Just time-tested content strategies backed by 185K+ real followers.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-text-main px-6 text-base font-bold text-white transition-transform hover:scale-105 hover:bg-primary hover:shadow-lg">
              Start Growing
            </Link>
            <Link to="/work" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-text-main transition-colors hover:border-gray-300 hover:bg-gray-50">
              See Results
            </Link>
          </div>

          <p className="mt-12 text-sm font-semibold text-text-sub uppercase tracking-widest">Trusted by creators in</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <span className="text-lg font-bold font-sans text-gray-400">Fashion & Lifestyle</span>
            <span className="text-lg font-bold font-sans text-gray-400">Personal Branding</span>
            <span className="text-lg font-bold font-sans text-gray-400">Coaching</span>
            <span className="text-lg font-bold font-sans text-gray-400">E-commerce</span>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="border-y border-gray-100 bg-background-off py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                We Practice What We Preach.
              </h2>
              <p className="text-lg leading-relaxed text-text-sub">
                Most agencies guess. We execute based on what actually works for us.
              </p>
              <p className="text-lg leading-relaxed text-text-sub">
                Our founder, Sanket, built a personal network of 185K+ followers before ever sending an invoice. Divines_Code isn't just a service—it's the systematic application of that experience to your brand. We know the algorithm changes because we deal with them every single day.
              </p>
              <div className="mt-4 flex gap-8">
                <div>
                  <p className="text-3xl font-black text-primary">185K+</p>
                  <p className="text-sm font-medium text-text-sub">Founder's Audience</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">100%</p>
                  <p className="text-sm font-medium text-text-sub">Organic Methods</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">Multi-Niche</p>
                  <p className="text-sm font-medium text-text-sub">Experience</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl lg:h-[500px]">
              <img
                src="/office.png"
                alt="Content creation setup"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">What We Actually Do</h2>
            <p className="mt-4 text-lg text-text-sub">No vague packages. Just the specific things you need to grow.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Film, title: "Reels Strategy", text: "We script and edit vertically for retention. No dancing required—just value." },
              { icon: Megaphone, title: "Brand Promo", text: "Getting your product seen by the right eyes, not just any eyes." },
              { icon: Handshake, title: "Influencer Mgmt", text: "We handle the DMs, negotiations, and contracts so you don't have to." },
              { icon: Users, title: "Full Management", text: "We take the keys. You watch the account grow while you sleep." }
            ].map((service, i) => (
              <div key={i} className="group relative flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-sub">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Stats */}
      <section className="overflow-hidden bg-background-off py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Does It Work?</h2>
              <p className="mt-2 text-lg text-text-sub">The numbers usually speak for themselves.</p>
            </div>
            <Link to="/work" className="group flex items-center gap-2 text-sm font-bold text-primary">
              See case studies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-text-main">Reach Growth</h4>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Consistent</span>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-text-main">842K</span>
                  <span className="text-sm font-medium text-text-sub">Accounts reached
                  </span>
                </div>
                <div className="mt-8 h-32 w-full">
                  <SimpleBarChart />
                </div>
                <p className="mt-4 text-xs text-text-sub">We track real engagement, not just views.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-primary p-8 text-white shadow-lg">
                <h4 className="text-lg font-semibold opacity-90">Avg. Engagement</h4>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black">High</span>
                  <span className="text-sm font-medium opacity-80">Retention</span>
                </div>
                <p className="mt-2 text-xs opacity-70">We target loyal community members, not ghost followers.</p>
              </div>
            </div>

            {/* Reels Gallery */}
            <PortfolioSlider />

          </div>
        </div>
      </section >

      {/* Testimonials */}
      < section className="bg-background-light py-24" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-text-main sm:text-4xl">From Our DMs</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { text: "Honestly, I was skeptical about 'agencies' but Sanket actually gets it. My reach has been consistent for the first time in forever.", author: "James K.", role: "Founder, Lifestyle Brand" },
              { text: "Divines_Code stopped me from wasting money on ads. Their organic strategy worked better in 3 weeks than my ads did in 3 months.", author: "Priya M.", role: "Coach" },
              { text: "Finally someone who doesn't just promise 'viral' but delivers actual sales. The reels are top notch.", author: "Arjun S.", role: "E-com Owner" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col rounded-xl bg-background-off p-8">
                <div className="mb-6 flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="mb-6 flex-1 text-lg leading-relaxed text-text-sub">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-text-main">{t.author}</p>
                    <p className="text-sm text-text-sub">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

    </div >
  );
};

export default Home;