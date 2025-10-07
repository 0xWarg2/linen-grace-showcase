import { Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t("about.values.mission.title"),
      description: t("about.values.mission.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.values.team.title"),
      description: t("about.values.team.description"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("about.values.heart.title"),
      description: t("about.values.heart.description"),
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">{t("about.story.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="bg-muted/30 shadow-soft">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                {t("about.partners.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("about.partners.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                <span className="text-2xl font-serif">Four Seasons</span>
                <span className="text-2xl font-serif">Ritz-Carlton</span>
                <span className="text-2xl font-serif">Aman Resorts</span>
                <span className="text-2xl font-serif">Six Senses</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
