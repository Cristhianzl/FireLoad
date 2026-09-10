type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="ExtinFire"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        className="fill-base-200 stroke-base-300"
        strokeWidth="1.5"
      />
      <path
        d="M14 28a10 10 0 0 0 12 0"
        className="stroke-base-content/30"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 9c3.2 3.3 5 6.1 5 9.3 0 2-1 3.6-2.6 4.4 1-2 .2-3.7-1.1-4.9.2 2.3-1.2 3.4-2.6 4.6-1.4 1.2-2.4 2.6-2.4 4.4A5 5 0 0 0 20 31a5.4 5.4 0 0 0 5.4-5.3c0-2.8-1.4-5-3-7"
        className="fill-primary"
      />
      <circle cx="20" cy="26" r="1.7" className="fill-primary-content" />
    </svg>
  );
}

export function Logo({ size = 32, withWordmark = true, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="font-display text-base-content text-xl font-bold tracking-tight">
          Extin<span className="text-primary">Fire</span>
        </span>
      )}
    </span>
  );
}
