import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film, Megaphone, Handshake, Users, ArrowRight, Star } from 'lucide-react';
import SimpleBarChart from '../components/BarChart';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background-light py-20 lg:py-32">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute top-40 -left-20 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]"></div>
        
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-text-sub">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Top-rated Agency for Instagram Growth
          </span>
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-text-main sm:text-6xl md:text-7xl">
            Digital Marketing Services That <span className="text-primary">Grow Brands</span> on Instagram
          </h1>
          <p className="mb-10 max-w-2xl text-lg font-normal text-text-sub sm:text-xl">
            Specializing in Reels growth, organic engagement, and premium brand collaborations. We turn followers into customers.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-text-main px-6 text-base font-bold text-white transition-transform hover:scale-105 hover:bg-primary hover:shadow-lg">
              Get Started
            </Link>
            <Link to="/work" className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-text-main transition-colors hover:border-gray-300 hover:bg-gray-50">
              View Our Work
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <span className="text-xl font-bold font-serif italic">VogueLife</span>
            <span className="text-xl font-bold font-mono">TechFlow</span>
            <span className="text-xl font-bold tracking-tight">AcmeCorp</span>
            <span className="text-xl font-bold font-sans tracking-widest uppercase">Luxe</span>
            <span className="text-xl font-bold font-serif">M O D E R N</span>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="border-y border-gray-100 bg-background-off py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                Organic Growth Specialists
              </h2>
              <p className="text-lg leading-relaxed text-text-sub">
                We don't just post; we strategize. Our focus is on authentic engagement and high-quality content that resonates with your audience.
              </p>
              <p className="text-lg leading-relaxed text-text-sub">
                In an era of fleeting attention spans, Divines_Code crafts narratives that stick. We leverage data-driven insights to ensure every Reel, Story, and Post contributes to your brand's long-term equity.
              </p>
              <div className="mt-4 flex gap-8">
                <div>
                  <p className="text-3xl font-black text-primary">50M+</p>
                  <p className="text-sm font-medium text-text-sub">Views Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">120%</p>
                  <p className="text-sm font-medium text-text-sub">Avg Growth</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">200+</p>
                  <p className="text-sm font-medium text-text-sub">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl lg:h-[500px]">
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Modern minimalist office" 
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
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-lg text-text-sub">Comprehensive solutions designed to elevate your social media presence.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Film, title: "Reels Creation", text: "High-quality, trend-focused short video content designed to go viral." },
              { icon: Megaphone, title: "Brand Promotion", text: "Strategic campaigns that amplify your brand voice across demographics." },
              { icon: Handshake, title: "Influencer Collabs", text: "Connecting your brand with voices that matter to build trust." },
              { icon: Users, title: "Account Handling", text: "Full-service management, from community engagement to posting." }
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
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">Proven Results</h2>
              <p className="mt-2 text-lg text-text-sub">See the difference we make in real numbers.</p>
            </div>
            <Link to="/work" className="group flex items-center gap-2 text-sm font-bold text-primary">
              View full portfolio 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-text-main">Monthly Reach</h4>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">+124.5%</span>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-text-main">842K</span>
                  <span className="text-sm font-medium text-text-sub">Accounts reached</span>
                </div>
                <div className="mt-8 h-32 w-full">
                   <SimpleBarChart />
                </div>
                <p className="mt-4 text-xs text-text-sub">Last 30 days vs previous period</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-primary p-8 text-white shadow-lg">
                <h4 className="text-lg font-semibold opacity-90">Engagement Rate</h4>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black">8.4%</span>
                  <span className="text-sm font-medium opacity-80">Avg. per post</span>
                </div>
                <p className="mt-2 text-xs opacity-70">Industry average: 1.2%</p>
              </div>
            </div>

            {/* Reels Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
              {[
                { title: "Neon Vibes", views: "125K", img: 2 },
                { title: "Urban Style", views: "98K", img: 3 },
                { title: "Morning Ritual", views: "210K", img: 4 },
                { title: "Tech Reviews", views: "180K", img: 5 },
              ].map((reel, i) => (
                <div key={i} className="group relative aspect-[9/16] min-w-[240px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-md">
                  <img src={`https://picsum.photos/400/700?random=${reel.img}`} alt={reel.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-bold">{reel.title}</p>
                    <p className="text-xs opacity-80">{reel.views} Views</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play size={24} className="text-white fill-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-text-main sm:text-4xl">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { text: "Divines_Code completely transformed our Instagram strategy. Our engagement has tripled in just two months.", author: "Sarah Jenkins", role: "CMO, Bloom Cosmetics" },
              { text: "The quality of Reels they produce is unmatched. Professional, trendy, and exactly what we needed.", author: "Mark Davis", role: "Founder, UrbanWear" },
              { text: "From 2K to 50K followers in 6 months. The numbers speak for themselves. Highly recommended.", author: "Elena Rodriguez", role: "Director, TechSolutions" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col rounded-xl bg-background-off p-8">
                <div className="mb-6 flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="mb-6 flex-1 text-lg leading-relaxed text-text-sub">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                  <img src={`https://picsum.photos/100/100?random=${10+i}`} alt={t.author} className="h-10 w-10 rounded-full object-cover bg-gray-300" />
                  <div>
                    <p className="font-bold text-text-main">{t.author}</p>
                    <p className="text-sm text-text-sub">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;