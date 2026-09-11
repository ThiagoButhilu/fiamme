export default function DrinksArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Bebidas geladas Fiamme">
      <rect width="320" height="240" fill="var(--color-crust-dim)" />

      <g transform="translate(120 40)">
        <path
          d="M14 0 H46 V26 Q58 40 58 62 V150 Q58 166 42 166 H18 Q2 166 2 150 V62 Q2 40 14 26 Z"
          fill="var(--color-flame)"
          stroke="var(--color-char)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect x="14" y="0" width="32" height="14" rx="3" fill="var(--color-char)" />
        <rect x="6" y="78" width="48" height="46" fill="var(--color-crust)" opacity="0.9" />
        <circle cx="30" cy="60" r="4" fill="var(--color-crust)" opacity="0.6" />
        <circle cx="42" cy="90" r="3" fill="var(--color-crust)" opacity="0.6" />
        <circle cx="20" cy="110" r="3.5" fill="var(--color-crust)" opacity="0.6" />
      </g>

      <g transform="translate(195 70)">
        <path
          d="M10 0 H34 V18 Q42 28 42 44 V116 Q42 128 30 128 H14 Q2 128 2 116 V44 Q2 28 10 18 Z"
          fill="var(--color-cheese)"
          stroke="var(--color-char)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect x="10" y="0" width="24" height="10" rx="2" fill="var(--color-char)" />
        <circle cx="22" cy="50" r="3" fill="var(--color-char)" opacity="0.25" />
        <circle cx="30" cy="72" r="2.4" fill="var(--color-char)" opacity="0.25" />
        <circle cx="16" cy="90" r="2.8" fill="var(--color-char)" opacity="0.25" />
      </g>

      <g transform="translate(70 110)">
        <rect x="0" y="0" width="34" height="58" rx="4" fill="var(--color-flame-dark)" stroke="var(--color-char)" strokeWidth="4" />
        <rect x="0" y="10" width="34" height="9" fill="var(--color-crust)" />
      </g>

      <rect x="0" y="206" width="320" height="34" fill="var(--color-crust)" />
      {[...Array(20)].map((_, i) => (
        <rect key={i} x={i * 16} y="206" width="8" height="8" fill="var(--color-flame)" opacity={i % 2 === 0 ? 1 : 0} />
      ))}
    </svg>
  )
}
