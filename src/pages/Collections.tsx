import { Card, CardContent } from "@/components/ui/card";
import bathTowels from "@/assets/bath-towels.jpg";
import faceTowels from "@/assets/face-towels.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import giftTowels from "@/assets/gift-towels.jpg";

const Collections = () => {
  const collections = [
    {
      name: "Bath Towels",
      image: bathTowels,
      description:
        "Our signature bath towels offer exceptional absorbency and luxurious softness. Made from premium long-staple organic cotton with a dense 600 GSM weight.",
      sizes: "27\" x 54\", 30\" x 58\"",
      colors: "White, Cream, Beige, Sage Green, Soft Blue",
      features: [
        "600 GSM premium organic cotton",
        "Double-stitched hems",
        "Exceptional absorbency",
        "Fade-resistant dyes",
      ],
    },
    {
      name: "Face Towels",
      image: faceTowels,
      description:
        "Gentle on skin yet highly effective, our face and hand towels combine elegance with practicality. Perfect for daily use with a refined 550 GSM construction.",
      sizes: "13\" x 13\" (face), 16\" x 30\" (hand)",
      colors: "White, Cream, Sage Green, Soft Pink",
      features: [
        "550 GSM soft organic cotton",
        "Gentle on sensitive skin",
        "Quick-drying",
        "Coordinating sets available",
      ],
    },
    {
      name: "Hotel & Spa Collection",
      image: hotelSpa,
      description:
        "Professional-grade towels designed for high-volume use without compromising luxury. Trusted by world-class hotels and spas for durability and elegance.",
      sizes: "Multiple sizes available",
      colors: "White, Cream, Custom branding options",
      features: [
        "Commercial-grade durability",
        "Withstands frequent laundering",
        "Custom embroidery available",
        "Bulk pricing for businesses",
      ],
    },
    {
      name: "Gift Towel Sets",
      image: giftTowels,
      description:
        "Elegantly packaged towel sets perfect for special occasions. Each set is beautifully presented with premium ribbons and gift-ready packaging.",
      sizes: "Curated assortments",
      colors: "Coordinated color palettes",
      features: [
        "Premium gift packaging",
        "Coordinated towel sets",
        "Perfect for weddings & events",
        "Personalization available",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated range of premium towels, each designed
            with a specific purpose and crafted with uncompromising quality.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`animate-fade-in ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="h-96 md:h-auto">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">
                      {collection.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {collection.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Sizes Available</h3>
                        <p className="text-sm text-muted-foreground">
                          {collection.sizes}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Colors</h3>
                        <p className="text-sm text-muted-foreground">
                          {collection.colors}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Features</h3>
                        <ul className="space-y-1">
                          {collection.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-accent mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
