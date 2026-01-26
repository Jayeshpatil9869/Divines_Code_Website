import React, { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
    { views: "125K", img: 2, video: "/video (1).mp4" },
    { views: "98K", img: 3, video: "/video (2).mp4" },
    { views: "210K", img: 4, video: "/video (3).mp4" },
    { views: "180K", img: 5, video: "/video (4).mp4" },
    { views: "95K", img: 6, video: "/video (1).mp4" },
    { views: "150K", img: 7, video: "/video (2).mp4" },
];

const ReelCard: React.FC<{ reel: typeof reels[0] }> = ({ reel }) => {
    return (
        <div className="group relative aspect-[9/16] min-w-[310px] flex-shrink-0 bg-gray-900 shadow-md snap-center overflow-hidden rounded-xl">
            <video
                src={reel.video}
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <p className="text-white text-xs font-bold">{reel.views} Views</p>
                </div>
            </div>
        </div>
    );
};

const PortfolioSlider: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative group/slider w-full min-w-0 rounded-2xl overflow-hidden h-full">
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
                className="flex gap-4 overflow-x-auto pb-4 px-2 hide-scrollbar snap-x snap-mandatory scroll-smooth w-full h-full items-stretch"
            >
                {reels.map((reel, i) => (
                    <ReelCard key={i} reel={reel} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioSlider;
