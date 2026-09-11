type SealProps = {
  className?: string
}

export default function Seal({ className }: SealProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Selo Fiamme Pizza Delivery"
    >
      <defs>
        <path id="seal-ring-top" d="M 22,112 A 88,88 0 0 1 198,112" />
        <path id="seal-ring-left" d="M 46,168 A 82,82 0 0 1 46,56" />
      </defs>

      <circle cx="110" cy="110" r="102" fill="#fff" stroke="var(--color-flame)" strokeWidth="3" />

      <text fill="var(--color-flame)" fontFamily="Titan One" fontSize="18" letterSpacing="0.5">
        <textPath href="#seal-ring-top" startOffset="50%" textAnchor="middle">
          ✳ FIAMME DELIVERY ✳
        </textPath>
      </text>
      <text fill="var(--color-flame)" fontFamily="Titan One" fontSize="15" letterSpacing="2">
        <textPath href="#seal-ring-left" startOffset="50%" textAnchor="middle">
          PIZZA
        </textPath>
      </text>

      {/* mascot: smiling pizza slice */}
      <g transform="translate(122 118)">
        <path
          d="M -34 26 Q 0 40 34 26 L 8 -44 Q 0 -50 -8 -44 Z"
          fill="var(--color-cheese)"
          stroke="var(--color-char)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M -34 26 Q 0 40 34 26"
          fill="none"
          stroke="#fff0c2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="-10" cy="-2" r="5" fill="var(--color-flame)" />
        <circle cx="11" cy="10" r="5" fill="var(--color-flame)" />
        <circle cx="2" cy="-20" r="4.5" fill="var(--color-flame)" />

        {/* cheese drips */}
        <path d="M -16 24 q -1 8 -3 12" stroke="#fff0c2" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 4 27 q 1 9 -1 13" stroke="#fff0c2" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 20 22 q 2 7 0 11" stroke="#fff0c2" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* face */}
        <ellipse cx="-9" cy="-8" rx="3.6" ry="4.6" fill="var(--color-char)" />
        <ellipse cx="9" cy="-8" rx="3.6" ry="4.6" fill="var(--color-char)" />
        <circle cx="-10.2" cy="-9.4" r="1.1" fill="#fff" />
        <circle cx="7.8" cy="-9.4" r="1.1" fill="#fff" />
        <path d="M -8 2 Q 0 9 8 2" stroke="var(--color-char)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <circle cx="-16" cy="-1" r="3" fill="var(--color-flame)" opacity="0.35" />
        <circle cx="16" cy="-1" r="3" fill="var(--color-flame)" opacity="0.35" />
      </g>
    </svg>
  )
}
