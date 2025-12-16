export default function TopBadge() {
  return (
    <div style={{ position: "absolute", left: "24px" }}>
      <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
        <path d="M0 0H120V36H8C3.58172 36 0 32.4183 0 28V0Z" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="-20" y1="28" x2="120" y2="28">
            <stop stopColor="#008641" />
            <stop offset="1" stopColor="#18A25B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
