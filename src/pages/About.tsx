import { Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "To craft premium towels that combine luxury, comfort, and sustainability, enhancing daily rituals for homes and hospitality businesses worldwide.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description:
        "A passionate team of textile experts, designers, and craftspeople dedicated to perfecting every thread with decades of combined experience.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description:
        "Quality, sustainability, and customer satisfaction guide everything we do. We believe in creating products that last and practices that protect our planet.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Luxe Threads
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over two decades, we've been weaving excellence into every towel,
            combining traditional craftsmanship with modern innovation.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2001, Luxe Threads began with a simple vision: to
                  create towels that transform ordinary moments into luxurious
                  experiences. What started as a small family workshop has grown
                  into a trusted name in premium textiles.
                </p>
                <p>
                  Our journey has been guided by an unwavering commitment to
                  quality. We source only the finest organic cotton, work with
                  skilled artisans, and employ sustainable practices at every step
                  of production. Each towel bears the mark of meticulous attention
                  to detail.
                </p>
                <p>
                  Today, our towels grace luxury hotels, world-class spas, and
                  discerning homes across the globe. Yet, despite our growth, we
                  remain true to our founding principles: exceptional quality,
                  sustainable practices, and customer satisfaction above all else.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            What Drives Us
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
                Trusted by the Best
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our towels are the choice of luxury hotels, premium spas, and
                boutique resorts around the world. We're proud to partner with
                establishments that share our commitment to excellence.
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
