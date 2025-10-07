import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-towels.jpg";
import bathTowels from "@/assets/bath-towels.jpg";
import faceTowels from "@/assets/face-towels.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import giftTowels from "@/assets/gift-towels.jpg";

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Crafted from the finest organic cotton for unmatched softness",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted by Hotels",
      description: "Preferred by luxury resorts and spas worldwide",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Sustainable practices and certified organic materials",
    },
  ];

  const collections = [
    { name: "Bath Towels", image: bathTowels, path: "/collections" },
    { name: "Face Towels", image: faceTowels, path: "/collections" },
    { name: "Hotel & Spa", image: hotelSpa, path: "/collections" },
    { name: "Gift Sets", image: giftTowels, path: "/collections" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxurious towels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Softness & Elegance
            <br />
            <span className="text-gradient">In Every Thread</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Premium towels crafted with organic cotton and sustainable practices
          </p>
          <Link to="/collections">
            <Button size="lg" className="group">
              Explore Collections
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover towels designed for every need, from everyday luxury to
              professional hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-smooth">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button variant="outline" size="lg">
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-secondary to-accent/20 border-none shadow-soft animate-fade-in">
            <CardContent className="py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Ready to Experience Luxury?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch to discuss your towel needs or learn more about our
                products
              </p>
              <Link to="/contact">
                <Button size="lg" variant="default">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
