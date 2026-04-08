import vetCat from "@/assets/vet-cat.jpg";
import vetSurgery from "@/assets/vet-surgery.jpg";
import vetLab from "@/assets/vet-lab.jpg";

const images = [
  { src: vetCat, alt: "Veterinário examinando gato", caption: "Clínica Veterinária" },
  { src: vetSurgery, alt: "Centro cirúrgico veterinário", caption: "Assistência Cirúrgica" },
  { src: vetLab, alt: "Laboratório clínico veterinário", caption: "Laboratório Clínico" },
  { src: vetCat, alt: "ONG de proteção animal", caption: "ONGs de Proteção Animal" },
];

const GallerySection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          Áreas de Atuação
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Conheça os ambientes onde você poderá atuar após a formação
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img) => (
            <div key={img.caption} className="group relative rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-sm font-heading font-semibold text-primary-foreground">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://unijb.multiversa.edu.br/api/Comprar.aspx?id=742835" target="_blank" rel="noopener noreferrer" className="cta-button">
            <span className="cta-button-shine" />
            <span className="relative flex items-center gap-2">🔥 GARANTA SUA VAGA — VAGAS LIMITADAS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
