import React, { useRef, useEffect, useState } from 'react';

interface CarouselRowProps {
  skills: string[];
  direction: 'left' | 'right';
  delay?: number;
}

const colorClasses = [
  'bg-blue-700/50 text-blue-100 border-blue-400',
  'bg-cyan-700/50 text-cyan-100 border-cyan-400',
  'bg-teal-700/50 text-teal-100 border-teal-400',
  'bg-green-700/50 text-green-100 border-green-400',
  'bg-yellow-700/50 text-yellow-100 border-yellow-400',
  'bg-orange-700/50 text-orange-100 border-orange-400',
  'bg-pink-700/50 text-pink-100 border-pink-400',
  'bg-purple-700/50 text-purple-100 border-purple-400',
  'bg-red-700/50 text-red-100 border-red-400',
];

export const CarouselRow: React.FC<CarouselRowProps> = ({ skills, direction, delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Always render at least 2 sets on initial load for instant fill
  const [repeatCount, setRepeatCount] = useState(2);
  const [rowWidth, setRowWidth] = useState(0);

  // Calculate how many times to repeat the skills to fill the row, and recalc on resize
  useEffect(() => {
    function recalc() {
      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.offsetWidth || 0;
        // Estimate width of one set
        const skillEls = containerRef.current.querySelectorAll('span');
        let setWidth = 0;
        for (let i = 0; i < skills.length; i++) {
          setWidth += (skillEls[i]?.offsetWidth || 0);
        }
        setRowWidth(setWidth);
        // Repeat enough times to fill at least 2x parent width
        const minRepeats = Math.ceil((parentWidth * 2) / (setWidth || 1));
        setRepeatCount(Math.max(2, minRepeats));
      }
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [skills]);

  // Animation CSS
  let animationStyle: React.CSSProperties = {};
  // Writing skills: left row 48s, right row 64s; Design skills: left 36s, right 54s
  if (direction === 'left') {
    animationStyle = {
      animation: `carousel-left ${delay === 0 ? 48 : 36}s linear infinite`,
      animationDelay: `${delay}s`,
      minWidth: rowWidth ? `${rowWidth * repeatCount}px` : undefined,
    };
  } else {
    animationStyle = {
      animation: `carousel-right-appear ${delay === 9 ? 64 : 54}s linear infinite`,
      animationDelay: `${delay}s`,
      minWidth: rowWidth ? `${rowWidth * repeatCount}px` : undefined,
    };
  }

  // Render repeated skills
  // Always render at least 2 sets before measuring, then update as needed
  const initialRepeat = Math.max(2, repeatCount);
  const repeatedSkills = Array.from({ length: initialRepeat }, () => skills).flat();

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={animationStyle}
      >
        {repeatedSkills.map((skill, idx) => (
          <span
            key={idx + skill}
            className={`mx-2 px-4 py-2 rounded-lg text-sm border-2 ${colorClasses[idx % colorClasses.length]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
