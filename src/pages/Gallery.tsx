import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import bathTowels from "@/assets/bath-towels.jpg";
import faceTowels from "@/assets/face-towels.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import giftTowels from "@/assets/gift-towels.jpg";
import heroImage from "@/assets/hero-towels.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: heroImage,
      title: "Luxury Bath Experience",
      category: t("gallery.categories.bath"),
    },
    {
      src: bathTowels,
      title: "Premium Collection",
      category: t("gallery.categories.bath"),
    },
    {
      src: faceTowels,
      title: "Face & Hand Towels",
      category: t("gallery.categories.face"),
    },
    {
      src: hotelSpa,
      title: "Hotel & Spa Collection",
      category: t("gallery.categories.professional"),
    },
    {
      src: giftTowels,
      title: "Gift Sets",
      category: t("gallery.categories.gifts"),
    },
    {
      src: sustainabilityImage,
      title: "Sustainable Production",
      category: t("gallery.categories.behindScenes"),
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t("gallery.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer shadow-soft hover:shadow-hover transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                  <p className="text-xs text-accent font-medium mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto rounded-lg shadow-hover"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-smooth"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
          </div>
        )}

        {/* Video Section Placeholder */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-in">
          <Card className="p-8 md:p-12 text-center shadow-soft">
            <h2 className="text-3xl font-serif font-bold mb-6">
              {t("gallery.video.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("gallery.video.description")}
            </p>
            <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                {t("gallery.video.placeholder")}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
