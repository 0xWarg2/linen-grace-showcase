import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
      if (!formspreeId) {
        throw new Error("Missing VITE_FORMSPREE_FORM_ID env");
      }
      // Normalize: allow full URL or raw ID
      const normalizedId = (() => {
        try {
          if (formspreeId.includes("/")) {
            const parts = formspreeId.split("/").filter(Boolean);
            return parts[parts.length - 1];
          }
          return formspreeId;
        } catch {
          return formspreeId;
        }
      })();

      const response = await fetch(`https://formspree.io/f/${normalizedId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            company: values.company,
            message: values.message,
            _subject: `New contact from ${values.name}`,
            _replyto: values.email,
          }),
        }
      );

      const data = await response.json().catch(() => ({} as any));

      if (!response.ok) {
        throw new Error((data && (data.error || data.message)) || "Failed to send");
      }

      toast({
        title: t("contact.form.success"),
        description: t("contact.form.successDescription"),
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: t("contact.form.error") || "Send failed",
        description: error?.message || t("contact.form.errorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map Google Maps language from our i18n language
  const googleMapsLang = (() => {
    const lang = (i18n.language || "en").toLowerCase();
    if (lang.startsWith("vi")) return "vi";
    if (lang.startsWith("zh")) return "zh-CN";
    if (lang.startsWith("ko")) return "ko";
    if (lang.startsWith("ja")) return "ja";
    return "en";
  })();

  const mapQuery = "Hoan+Kiem+Lake,+Hanoi";
  const mapLink = `https://www.google.com/maps?q=${mapQuery}&hl=${googleMapsLang}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&hl=${googleMapsLang}&output=embed`;

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contact.info.email"),
      content: "info@luxethreads.com",
      link: "mailto:info@luxethreads.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contact.info.phone"),
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("contact.info.address"),
      content: "Hồ Hoàn Kiếm, Hoàn Kiếm, Hà Nội, Việt Nam",
      link: mapLink,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-soft animate-fade-in">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">
                {t("contact.form.title")}
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.name")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")} *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.companyOptional")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.company")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.message")} *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full mt-2 md:mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.form.sending")
                    ) : (
                      <>
                        {t("contact.form.send")}
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-hover transition-smooth"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Embed */}
            <Card className="shadow-soft">
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    title="Hồ Hoàn Kiếm, Hà Nội"
                    src={mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Partners Section */}
            <Card className="bg-muted/30 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {t("contact.partners.title")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("contact.partners.description")}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Four Seasons Hotels & Resorts</p>
                  <p>• The Ritz-Carlton</p>
                  <p>• Aman Resorts</p>
                  <p>• Six Senses Hotels Resorts Spas</p>
                  <p>• Rosewood Hotels & Resorts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
