const marqueeItems = [
  "VAGAS LIMITADAS",
  "AUXILIAR VETERINÁRIO",
  "CAPACITE-SE",
  "FORMAÇÃO",
  "PRESENCIAL",
];

const MarqueeBanner = () => {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden py-3 select-none" style={{ backgroundColor: 'hsl(var(--banner))' }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-heading font-bold uppercase tracking-widest flex items-center gap-6" style={{ color: 'hsl(var(--banner-foreground))' }}>
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--banner-foreground) / 0.5)' }} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
