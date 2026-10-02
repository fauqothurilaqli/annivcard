import React, { useRef, useState, useEffect } from 'react';

interface SlidingTextProps {
  text: string;
  className?: string;
}

export const SlidingText: React.FC<SlidingTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        const hasOverflow = textRef.current.scrollWidth > containerRef.current.clientWidth + 1;
        setIsOverflowing(hasOverflow);
      }
    };

    // Run measurement after DOM layout
    const timer = setTimeout(checkOverflow, 50);
    window.addEventListener('resize', checkOverflow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [text]);

  // Dynamic duration based on text length: comfortable reading pace (~18 chars/sec)
  const duration = Math.max(5, Math.min(16, text.length * 0.45));

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden min-w-0 relative ${
        isOverflowing
          ? '[mask-image:linear-gradient(to_right,transparent,black_4px,black_calc(100%-8px),transparent)]'
          : ''
      } ${className}`}
      title={text}
    >
      {/* Invisible element used to calculate natural unconstrained width */}
      <span
        ref={textRef}
        className="invisible absolute whitespace-nowrap pointer-events-none -z-10"
        aria-hidden="true"
      >
        {text}
      </span>

      {isOverflowing ? (
        <div
          className="inline-flex whitespace-nowrap will-change-transform animate-marquee-scroll"
          style={{ animationDuration: `${duration}s` }}
        >
          <span className="pr-6">{text}</span>
          <span className="pr-6 opacity-30 select-none">·</span>
          <span className="pr-6">{text}</span>
          <span className="pr-6 opacity-30 select-none">·</span>
        </div>
      ) : (
        <span className="whitespace-nowrap inline-block">{text}</span>
      )}
    </div>
  );
};
