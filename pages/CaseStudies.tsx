import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Heart } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="w-full bg-background-light">
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-6">
            Proven Results
          </h1>
          <p className="text-xl text-neutral-500 font-normal leading-relaxed max-w-2xl">
            Real growth stories from the brands we scale on Instagram. We turn aesthetics into engagement and followers into revenue.
          </p>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:h-[600px]">
            {/* Text Side */}
            <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center gap-6 z-10 bg-white lg:border-r border-neutral-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full w-fit">
                <TrendingUp size={14} className="font-bold" />
                <span className="text-xs font-bold uppercase tracking-wide">Case Study</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Flagship Client Transformation</h2>
              <p className="text-neutral-500">
                See how we took a generic feed and turned it into a high-converting visual asset.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-100 p-3 rounded-lg">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Follower Growth</p>
                    <p className="text-xl font-bold text-primary">+45,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-100 p-3 rounded-lg">
                    <Heart size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Engagement Rate</p>
                    <p className="text-xl font-bold text-primary">+250%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Slider (Simulated) */}
            <div className="lg:col-span-8 relative group h-[400px] lg:h-full overflow-hidden">
               {/* After Image */}
               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1200/800?random=50)' }}></div>
               <div className="absolute top-6 right-6 bg-primary/90 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg z-20">AFTER</div>
               
               {/* Before Image (Clipped) */}
               <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r-4 border-white z-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1200/800?random=51&grayscale)' }}>
                 <div className="absolute inset-0 bg-black/20"></div>
               </div>
               <div className="absolute top-6 left-6 bg-white/90 text-primary px-3 py-1 rounded-md text-sm font-bold shadow-lg z-20">BEFORE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="w-full bg-white border-y border-neutral-100 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            {[
              { val: "10M+", label: "Total Reach Generated" },
              { val: "50+", label: "Brands Scaled Globally" },
              { val: "1.2K+", label: "High-Performance Reels" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <span className="text-5xl font-black text-primary mb-2 tracking-tighter">{stat.val}</span>
                <p className="text-neutral-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
         <div className="mb-12 text-center md:text-left">
           <h3 className="text-2xl font-bold text-primary mb-4">Client Feedback</h3>
           <p className="text-neutral-500 max-w-xl">Don't just take our word for it.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { letter: "F", color: "bg-neutral-100", textColor: "text-primary", quote: "They completely transformed our visual identity.", author: "Sarah Jenkins", role: "CMO", tag: "+50k Followers" },
              { letter: "T", color: "bg-blue-100", textColor: "text-blue-600", quote: "ROI on our reels has never been higher.", author: "James Kennedy", role: "Founder", tag: "3.5M Views" },
              { letter: "B", color: "bg-pink-100", textColor: "text-pink-600", quote: "From 0 to 50k followers in record time.", author: "Elena Rodriguez", role: "CEO", tag: "+200% Growth" },
              { letter: "F", color: "bg-orange-100", textColor: "text-orange-600", quote: "The engagement rate skyrocketed immediately.", author: "Marcus Thorne", role: "Director", tag: "High Engage" },
              { letter: "L", color: "bg-purple-100", textColor: "text-purple-600", quote: "A truly data-driven approach to aesthetics.", author: "David Black", role: "Owner", tag: "Brand Scale" },
              { letter: "E", color: "bg-teal-100", textColor: "text-teal-600", quote: "Consistent viral hits.", author: "Priya Mehta", role: "Marketing Lead", tag: "Viral Reels" }
            ].map((card, i) => (
              <div key={i} className="flex flex-col p-6 rounded-xl bg-white shadow-sm border border-neutral-100 transition-transform hover:-translate-y-1">
                 <div className="flex items-center justify-between mb-6">
                   <div className={`w-10 h-10 rounded-full ${card.color} flex items-center justify-center text-xl font-bold ${card.textColor}`}>{card.letter}</div>
                   <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                     <span className="text-xs font-bold text-primary">{card.tag}</span>
                   </div>
                 </div>
                 <h4 className="text-lg font-bold text-primary leading-tight mb-4">"{card.quote}"</h4>
                 <div className="mt-auto pt-4 border-t border-neutral-100">
                   <p className="text-sm font-semibold text-primary">{card.author}</p>
                   <p className="text-xs text-neutral-500">{card.role}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>
      
      {/* Final CTA */}
      <section className="w-full py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready for your own success story?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary hover:bg-neutral-100 font-bold px-8 py-4 rounded-lg text-lg min-w-[200px] transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;