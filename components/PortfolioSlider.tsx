import React, { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
    { title: "Neon Vibes", views: "125K", img: 2 },
    { title: "Urban Style", views: "98K", img: 3 },
    { title: "Morning Ritual", views: "210K", img: 4 },
    { title: "Tech Reviews", views: "180K", img: 5 },
    { title: "Fitness Motivation", views: "95K", img: 6 },
    { title: "Travel Diary", views: "150K", img: 7 },
];

const PortfolioSlider: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300; // Adjust scroll amount as needed
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative group/slider w-full min-w-0">
            {/* Navigation Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/90 p-3 shadow-lg transition-all opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white disabled:opacity-30 backdrop-blur-sm"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/90 p-3 shadow-lg transition-all opacity-0 group-hover/slider:opacity-100 hover:bg-primary hover:text-white backdrop-blur-sm"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slider Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 px-2 hide-scrollbar snap-x snap-mandatory scroll-smooth w-full"
            >
                {reels.map((reel, i) => (
                    <div key={i} className="group relative aspect-[9/16] min-w-[310px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-md snap-center">
                        <img
                            src={`https://picsum.photos/400/700?random=${reel.img}`}
                            alt={reel.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
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
    );
};

export default PortfolioSlider;
