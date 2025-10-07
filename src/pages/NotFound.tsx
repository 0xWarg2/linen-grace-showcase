import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto shadow-soft">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-serif font-bold mb-4">
              {t("notFound.title")}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t("notFound.description")}
            </p>
            <Link to="/">
              <Button className="w-full">
                {t("notFound.backHome")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
