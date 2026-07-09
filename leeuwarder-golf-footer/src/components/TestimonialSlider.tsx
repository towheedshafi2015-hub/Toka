import React from 'react';
import { Review } from '../types';
import { Star, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Richard K.',
    role: 'Club Member since 2021',
    rating: 5,
    title: 'Incredible Track & Top Pro Coaching',
    text: 'The 18-hole championship track is in pristine condition year-round. Lowered my handicap from 15 to 9 using their premium pro coaching program!',
    resultMetric: 'Handicap -6 in 3 Months',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Sandra de Vries',
    role: 'Corporate Partner',
    rating: 5,
    title: 'Spectacular Business Events',
    text: 'Our corporate tournament was organized flawlessly. The networking atmosphere and state-of-the-art facilities brought in €120k in new business partnerships!',
    resultMetric: '€120k New Partnerships',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Daan B.',
    role: 'Beginner Course Graduate',
    rating: 5,
    title: 'From Zero to GVB in No Time',
    text: 'The "Beginnen met Golf" package was absolute life-changing. Energetic instructors, simple steps, and I got my certified GVB license in under 4 weeks!',
    resultMetric: 'GVB Certified in 4 Weeks',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Thomas M.',
    role: 'Club Champion 2024',
    rating: 5,
    title: 'World-Class Driving Range Tech',
    text: 'The new trackman range simulators are incredible. The real-time feedback helped me increase my average drive distance by over 45 meters.',
    resultMetric: '+45m Drive Distance',
    date: '3 days ago',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Sophie L.',
    role: 'Verified Visitor',
    rating: 5,
    title: 'Pristine Greens & Top Clubhouse',
    text: 'Simply the most stunning golf course in Friesland. The water hazards are beautifully challenging, and the post-round dining at the club is absolute Michelin quality.',
    resultMetric: '10/10 Hospitality Score',
    date: '5 days ago',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Mark van Dijk',
    role: 'Junior Academy Parent',
    rating: 5,
    title: 'Fantastic Junior Academy',
    text: 'The instructors here are truly passionate. The personalized development plan helped my 12-year-old son win his first national junior tournament!',
    resultMetric: 'Junior Regional Champion',
    date: '2 months ago',
    verified: true,
  }
];

export default function TestimonialSlider() {
  // We double the reviews list to create the seamless infinite scroll effect
  const doubledReviews = [...INITIAL_REVIEWS, ...INITIAL_REVIEWS];

  return (
    <div className="w-full py-16 px-4 md:px-8 relative overflow-hidden" id="reviews-slider-section">
      {/* Dynamic Keyframes for seamless scrolling */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 45s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 45s linear infinite;
        }
        .animate-marquee-ltr:hover, .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Trustpilot-Style Header Indicator */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="text-center md:text-left">
          <p className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase mb-2 flex items-center justify-center md:justify-start gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Customer Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
            How we deliver <span className="text-emerald-400 font-extrabold underline decoration-emerald-500/40 underline-offset-4">outstanding results</span>
          </h2>
        </div>

        {/* Trustpilot Inspired Badge */}
        <div 
          id="trustpilot-rating-badge"
          className="flex flex-col items-center md:items-end bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:border-emerald-500/30 group"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-white font-bold tracking-tight text-lg">Excellent</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-[18px] h-[18px] bg-[#00b67a] flex items-center justify-center rounded-sm">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/70 font-sans tracking-wide">
            Based on <span className="text-white font-semibold">1,420+ reviews</span> on 
            <span className="text-emerald-400 font-bold ml-1 relative inline-block group-hover:scale-105 transition-transform">
              ★ Trustpilot
            </span>
          </p>
          <p className="text-[10px] text-emerald-400/90 font-mono mt-1">
            Average Member Rating: 4.9 / 5.0
          </p>
        </div>
      </div>

      {/* Edge Fades for Liquid-Glass Look */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" />

      {/* Single Scrolling Row - Left to Right scrolling visually */}
      <div className="w-full overflow-hidden flex mask-gradient-x" id="scrolling-row-1">
        <div className="flex gap-6 animate-marquee-ltr py-4 pr-6 select-none">
          {doubledReviews.map((review, idx) => (
            <div
              key={`${review.id}-row1-${idx}`}
              className="w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-emerald-500/30 flex flex-col justify-between"
              id={`review-card-row1-${idx}`}
            >
              {/* Card Header: Trustpilot Star Row & Verified Status */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm">
                        <Star className="w-3.5 h-3.5 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Member
                    </span>
                  )}
                </div>

                {/* Review Heading & Text */}
                <h3 className="text-white font-semibold text-base mb-2 font-sans leading-tight">
                  "{review.title}"
                </h3>
                <p className="text-white/70 text-sm font-sans line-clamp-3 mb-4 leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Card Footer: Impact Metric & User Bio */}
              <div className="border-t border-white/10 pt-3.5 mt-auto flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm tracking-tight">{review.author}</span>
                  <span className="text-white/50 text-[11px]">{review.role}</span>
                </div>

                {/* Result Metric */}
                {review.resultMetric && (
                  <div className="flex items-center gap-1 bg-emerald-400/15 border border-emerald-400/20 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-xl">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{review.resultMetric}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
