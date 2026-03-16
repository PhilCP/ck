"use client";

export default function MarqueeStrip() {
  const items = [
    "Fine Dining",
    "✦",
    "French Cuisine",
    "✦",
    "Pastry Arts",
    "✦",
    "Pierre Gagnaire",
    "✦",
    "Dubai",
    "✦",
    "City & Guilds",
    "✦",
    "Italian Cuisine",
    "✦",
    "8 Years Experience",
    "✦",
    "CK-Unlimited",
    "✦",
    "Michelin Excellence",
    "✦",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-dark-200 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 text-label uppercase ${
              item === "✦" ? "text-gold" : "text-cream/30"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
