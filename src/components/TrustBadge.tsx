import React from 'react';
import { SITE_CONFIG } from '../siteConfig';

interface TrustBadgeProps {
  className?: string;
  dark?: boolean;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ className = '', dark = false }) => {
  return (
    <div
      id="trust-google-badge"
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm tracking-wide transition-colors ${
        dark
          ? 'bg-[#25282B] border-[#383C41] text-[#FAF8F5]'
          : 'bg-[#FAF8F5] border-[#E5DFD7] text-[#1E2022] shadow-xs'
      } ${className}`}
    >
      <div className="flex items-center gap-1 text-[#C4823F]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-medium">
        <strong>{SITE_CONFIG.googleRating.score}/5</strong> sur Google
      </span>
      <span className="text-[#878C94]">•</span>
      <span className={`${dark ? 'text-[#B0B5BC]' : 'text-[#5C6067]'}`}>
        {SITE_CONFIG.googleRating.reviewsCount} avis
      </span>
    </div>
  );
};
