import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import bathTowels from "@/assets/bath-towels.jpg";
import faceTowels from "@/assets/face-towels.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import giftTowels from "@/assets/gift-towels.jpg";

const Collections = () => {
  const { t } = useTranslation();
  
  const collections = [
    {
      name: t("collections.bath.name"),
      image: bathTowels,
      description: t("collections.bath.description"),
      sizes: t("collections.bath.sizes"),
      colors: t("collections.bath.colors"),
      features: t("collections.bath.features", { returnObjects: true }) as string[],
    },
    {
      name: t("collections.face.name"),
      image: faceTowels,
      description: t("collections.face.description"),
      sizes: t("collections.face.sizes"),
      colors: t("collections.face.colors"),
      features: t("collections.face.features", { returnObjects: true }) as string[],
    },
    {
      name: t("collections.hotel.name"),
      image: hotelSpa,
      description: t("collections.hotel.description"),
      sizes: t("collections.hotel.sizes"),
      colors: t("collections.hotel.colors"),
      features: t("collections.hotel.features", { returnObjects: true }) as string[],
    },
    {
      name: t("collections.gift.name"),
      image: giftTowels,
      description: t("collections.gift.description"),
      sizes: t("collections.gift.sizes"),
      colors: t("collections.gift.colors"),
      features: t("collections.gift.features", { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t("collections.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("collections.subtitle")}
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
                        <h3 className="font-semibold mb-2">{t("collections.sizesLabel")}</h3>
                        <p className="text-sm text-muted-foreground">
                          {collection.sizes}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">{t("collections.colorsLabel")}</h3>
                        <p className="text-sm text-muted-foreground">
                          {collection.colors}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">{t("collections.featuresLabel")}</h3>
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
