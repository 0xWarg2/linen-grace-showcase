import { Leaf, Award, Recycle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Quality = () => {
  const { t } = useTranslation();
  
  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t("quality.certifications.oeko.title"),
      description: t("quality.certifications.oeko.description"),
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t("quality.certifications.organic.title"),
      description: t("quality.certifications.organic.description"),
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: t("quality.certifications.eco.title"),
      description: t("quality.certifications.eco.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("quality.certifications.iso.title"),
      description: t("quality.certifications.iso.description"),
    },
  ];

  const qualityPoints = t("quality.standards.points", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t("quality.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("quality.subtitle")}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-20 animate-fade-in-up">
          <Card className="overflow-hidden shadow-soft">
            <img
              src={sustainabilityImage}
              alt="Sustainable production"
              className="w-full h-96 object-cover"
            />
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                {t("quality.craft.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t("quality.craft.p1")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("quality.craft.p2")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            {t("quality.certifications.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-8">
                {t("quality.standards.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sustainability Commitment */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="bg-gradient-to-r from-secondary to-accent/20 border-none shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                {t("quality.promise.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t("quality.promise.intro")}
                </p>
                <ul className="space-y-2 ml-6">
                  {t("quality.promise.points", { returnObjects: true }).map((point: string, index: number) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
                <p className="pt-4">
                  {t("quality.promise.conclusion")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quality;
