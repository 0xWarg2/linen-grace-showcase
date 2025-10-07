import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              {t("brand")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                {t("nav.about")}
              </Link>
              <Link to="/collections" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                {t("nav.collections")}
              </Link>
              <Link to="/quality" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                {t("nav.quality")}
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                {t("nav.gallery")}
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4">{t("nav.collections")}</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t("home.collections.bath")}</p>
              <p className="text-sm text-muted-foreground">{t("home.collections.face")}</p>
              <p className="text-sm text-muted-foreground">{t("home.collections.hotel")}</p>
              <p className="text-sm text-muted-foreground">{t("home.collections.gift")}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactTitle")}</h4>
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
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
