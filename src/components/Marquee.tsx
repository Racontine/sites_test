const items = [
  "SLA · Stéréolithographie",
  "SLS · Frittage laser",
  "FDM · Dépôt de fil",
  "Polyjet",
  "MJF · Multi Jet Fusion",
  "DMLS · Métal",
  "CAO 3D",
  "Finition & Peinture",
  "Petites séries",
];

export function Marquee() {
  return (
    <section className="border-y border-neutral-900/10 bg-neutral-900 text-white py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 text-sm">
            <span className="text-neutral-400">{it}</span>
            <span className="text-orange-500">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
