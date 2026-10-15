"use client";

const leaves = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: (index * 37 + 8) % 100,
  delay: -((index * 2.7) % 18),
  duration: 15 + ((index * 7) % 12),
  size: 18 + ((index * 13) % 18),
  drift: (index % 2 ? 1 : -1) * (24 + ((index * 11) % 48)),
  rotate: (index * 47) % 180,
}));

function LeafShape({ index }) {
  const shades = ["#b7ce9f", "#d5e1c7", "#7fa06f", "#dce7d5"];
  const fill = shades[index % shades.length];
  return (
    <svg viewBox="0 0 40 52" width="100%" height="100%" aria-hidden="true">
      <path d="M33 3C19 4 5 13 5 27c0 10 7 17 15 16C34 40 39 20 33 3Z" fill={fill} fillOpacity=".82" />
      <path d="M8 40C15 29 22 19 32 5M17 30l-1-11M22 23l9 1M12 35l-2-8" fill="none" stroke="#34583a" strokeOpacity=".65" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {leaves.map((leaf) => (
        <span
          className="falling-leaf"
          key={leaf.id}
          style={{
            "--leaf-left": `${leaf.left}%`,
            "--leaf-delay": `${leaf.delay}s`,
            "--leaf-duration": `${leaf.duration}s`,
            "--leaf-size": `${leaf.size}px`,
            "--leaf-drift": `${leaf.drift}px`,
            "--leaf-rotate": `${leaf.rotate}deg`,
          }}
        >
          <LeafShape index={leaf.id} />
        </span>
      ))}
    </div>
  );
}
