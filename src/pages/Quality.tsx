import { Leaf, Award, Recycle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Quality = () => {
  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "OEKO-TEX Certified",
      description:
        "All our textiles are OEKO-TEX Standard 100 certified, ensuring they're free from harmful substances.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic Cotton",
      description:
        "We use 100% certified organic cotton, grown without pesticides or harmful chemicals.",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Eco-Friendly Dyeing",
      description:
        "Our low-impact dyeing process uses 50% less water and energy than conventional methods.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO Certified",
      description:
        "Our manufacturing facilities maintain ISO 9001 quality management certification.",
    },
  ];

  const qualityPoints = [
    "Long-staple organic cotton for superior softness and durability",
    "High GSM (grams per square meter) for maximum absorbency",
    "Double-stitched hems prevent fraying and extend product life",
    "Colorfast dyes that resist fading after repeated washing",
    "Rigorous quality control at every production stage",
    "Tested for 500+ wash cycles while maintaining softness",
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Quality & Sustainability
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence extends beyond the product to encompass
            ethical sourcing and environmental responsibility.
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
                Crafted with Care
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Every towel we produce is the result of meticulous attention to
                detail and a deep respect for both people and planet. From the
                cotton fields to your home, we ensure ethical practices and
                environmental responsibility at every step.
              </p>
              <p className="text-lg text-muted-foreground">
                Our state-of-the-art facilities combine traditional weaving
                techniques with modern technology, ensuring consistency while
                maintaining the artisanal quality that sets our towels apart.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            Our Certifications
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
                Uncompromising Quality Standards
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
                Our Sustainability Promise
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe luxury and sustainability can coexist. That's why
                  we've committed to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Carbon-neutral shipping by 2025</li>
                  <li>• 100% renewable energy in all facilities by 2026</li>
                  <li>• Zero waste manufacturing processes</li>
                  <li>• Fair wages and safe working conditions for all workers</li>
                  <li>• Supporting organic farming communities</li>
                </ul>
                <p className="pt-4">
                  When you choose Luxe Threads, you're not just choosing premium
                  quality—you're supporting a more sustainable future for textile
                  manufacturing.
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
