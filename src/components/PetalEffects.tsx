import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number; // percentage 0-100
  size: number;
  speed: number;
  delay: number;
  rotateSpeed: number;
  opacity: number;
  isLeaf: boolean;
}

export const PetalEffects: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (!enabled) {
      setPetals([]);
      return;
    }

    const items: Petal[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 95,
      size: Math.random() * 12 + 10,
      speed: Math.random() * 8 + 7,
      delay: Math.random() * 5,
      rotateSpeed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.4,
      isLeaf: i % 3 === 0, // 1 in 3 is soft sage leaf, others are soft rose petals
    }));

    setPetals(items);
  }, [enabled]);

  if (!enabled || petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
            animation: `driftDown ${petal.speed}s linear infinite, sway ${petal.rotateSpeed}s ease-in-out infinite alternate`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {petal.isLeaf ? (
            // Soft Sage Botanical Leaf
            <svg
              width={petal.size}
              height={petal.size * 1.5}
              viewBox="0 0 24 36"
              fill="none"
              className="text-[#7A9983]"
            >
              <path
                d="M12 0C12 18 24 24 24 36C12 36 0 24 0 12C0 6 6 0 12 0Z"
                fill="currentColor"
              />
              <path d="M12 4v28" stroke="#52705B" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          ) : (
            // Romantic Rose Petal
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#E5B5B9]"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      ))}

      <style>{`
        @keyframes driftDown {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
          }
        }
        @keyframes sway {
          0% {
            margin-left: -15px;
          }
          100% {
            margin-left: 20px;
          }
        }
      `}</style>
    </div>
  );
};
