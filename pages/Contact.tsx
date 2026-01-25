import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light font-display text-primary antialiased min-h-screen flex flex-col">
       <div className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1200px] flex flex-col gap-12">
             <div className="max-w-3xl">
                <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                   Let’s Connect
                </h1>
                <p className="text-neutral-500 text-lg md:text-xl font-normal leading-relaxed">
                   Reach out to start your Instagram growth journey today.
                </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div className="flex flex-col gap-8">
                   <div className="flex flex-col gap-2">
                      {[
                        { icon: Mail, label: "Email", value: "hello@divinescode.com", href: "mailto:hello@divinescode.com" },
                        { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                        { icon: MessageSquare, label: "WhatsApp", value: "Start Direct Chat", href: "#" },
                        { icon: MapPin, label: "Location", value: "Digital HQ, New York, NY", href: null }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/50 transition-colors group">
                           <div className="flex items-center justify-center shrink-0 size-12 rounded-lg bg-white border border-neutral-200 text-primary shadow-sm">
                              <item.icon size={20} />
                           </div>
                           <div className="flex flex-col">
                              <p className="text-primary text-base font-semibold">{item.label}</p>
                              {item.href ? (
                                <a className="text-neutral-500 text-sm hover:text-primary transition-colors" href={item.href}>{item.value}</a>
                              ) : (
                                <p className="text-neutral-500 text-sm">{item.value}</p>
                              )}
                           </div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="px-4 mt-2">
                      <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider opacity-60">Follow Us</p>
                      <div className="flex items-center gap-4">
                        <a href="#" className="size-10 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                           <Instagram size={20} />
                        </a>
                        <a href="#" className="size-10 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                           <Linkedin size={20} />
                        </a>
                      </div>
                   </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-neutral-100 h-full">
                   <form className="flex flex-col gap-6 h-full justify-center" onSubmit={(e) => e.preventDefault()}>
                      <div>
                         <label className="block text-sm font-semibold text-primary mb-2" htmlFor="name">Full Name</label>
                         <input className="w-full h-12 px-4 rounded-lg bg-neutral-50 border border-[#e5e5e5] text-primary placeholder-neutral-400 focus:ring-0 focus:border-primary focus:outline-none transition-colors" id="name" placeholder="John Doe" type="text" />
                      </div>
                      <div>
                         <label className="block text-sm font-semibold text-primary mb-2" htmlFor="email">Email Address</label>
                         <input className="w-full h-12 px-4 rounded-lg bg-neutral-50 border border-[#e5e5e5] text-primary placeholder-neutral-400 focus:ring-0 focus:border-primary focus:outline-none transition-colors" id="email" placeholder="john@example.com" type="email" />
                      </div>
                      <div>
                         <label className="block text-sm font-semibold text-primary mb-2" htmlFor="subject">Subject</label>
                         <select className="w-full h-12 px-4 rounded-lg bg-neutral-50 border border-[#e5e5e5] text-primary focus:ring-0 focus:border-primary focus:outline-none transition-colors cursor-pointer" id="subject">
                            <option>General Inquiry</option>
                            <option>Instagram Growth</option>
                            <option>Content Strategy</option>
                            <option>Other</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm font-semibold text-primary mb-2" htmlFor="message">Message</label>
                         <textarea className="w-full p-4 rounded-lg bg-neutral-50 border border-[#e5e5e5] text-primary placeholder-neutral-400 focus:ring-0 focus:border-primary focus:outline-none transition-colors resize-none" id="message" placeholder="Tell us about your project..." rows={5}></textarea>
                      </div>
                      <button className="mt-2 w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md" type="submit">
                         Send Message
                      </button>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;