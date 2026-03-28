import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroImg from "@/assets/hero-construction.png";
import aboutImg from "@/assets/about-redevelopment.jpg";

const categories = ["All", "Residential", "Commercial", "Construction"];

const images = [
  { src: gallery1, category: "Residential", title: "Luxury Apartments - Andheri" },
  { src: gallery2, category: "Commercial", title: "Premium Lobby - Bandra" },
  { src: gallery3, category: "Construction", title: "Team at Work - Thane" },
  { src: gallery4, category: "Residential", title: "Township Project - Navi Mumbai" },
  { src: gallery5, category: "Residential", title: "Villa Complex - Lonavala" },
  { src: gallery6, category: "Commercial", title: "Corporate Office - BKC" },
  { src: heroImg, category: "Construction", title: "Redevelopment Site - Dadar" },
  { src: aboutImg, category: "Residential", title: "Before & After - Worli" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('assets/about.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Our Portfolio
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>

          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-semibold transition-all ${filter === cat
                  ? "bg-gradient-brand text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/60 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-foreground font-display font-bold">{img.title}</p>
                    <p className="text-secondary text-sm">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full animate-fade-in">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-primary-foreground text-center mt-4 font-display text-lg">
              {filtered[lightbox].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
