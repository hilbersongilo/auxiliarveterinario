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
    <div className="relative overflow-hidden bg-primary py-3 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-heading font-bold uppercase tracking-widest text-primary-foreground flex items-center gap-6">
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
