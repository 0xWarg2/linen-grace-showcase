import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Luxe Threads
            </h3>
            <p className="text-sm text-muted-foreground">
              Crafting premium towels with elegance and sustainability at heart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/collections" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Collections
              </Link>
              <Link to="/quality" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Quality & Sustainability
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Gallery
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Bath Towels</p>
              <p className="text-sm text-muted-foreground">Face Towels</p>
              <p className="text-sm text-muted-foreground">Hotel & Spa</p>
              <p className="text-sm text-muted-foreground">Gift Sets</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@luxethreads.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Textile Lane, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Luxe Threads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
