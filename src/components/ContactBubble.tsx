import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, Send, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const getEnv = (key: string, fallback: string = "") => {
  const v = (import.meta as any).env?.[key] as string | undefined;
  return v && v.trim().length > 0 ? v : fallback;
};

const ContactBubble = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const phone = getEnv("VITE_CONTACT_PHONE", "+84123456789");
  const zaloLink = getEnv("VITE_ZALO_LINK", "https://zalo.me/");
  const subscribeMail = getEnv("VITE_SUBSCRIBE_EMAIL", "info@luxethreads.com");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-64 rounded-xl shadow-soft border bg-background p-3 animate-in fade-in-0 zoom-in-95">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">{t("contactBubble.title")}</p>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid gap-2">
            <a href={`tel:${phone}`}>
              <Button className="w-full justify-start" variant="secondary">
                <Phone className="w-4 h-4 mr-2" /> {t("contactBubble.callNow", { phone })}
              </Button>
            </a>
            <a href={zaloLink} target="_blank" rel="noreferrer noopener">
              <Button className="w-full justify-start" variant="secondary">
                <MessageCircle className="w-4 h-4 mr-2" /> {t("contactBubble.chatZalo")}
              </Button>
            </a>
            <Button
              className="w-full justify-start"
              variant="secondary"
              onClick={() => {
                navigate("/contact");
                setOpen(false);
              }}
            >
              <Mail className="w-4 h-4 mr-2" /> {t("contactBubble.subscribe")}
            </Button>
            <Button
              className="w-full justify-start"
              onClick={() => {
                navigate("/contact");
                setOpen(false);
              }}
            >
              <Send className="w-4 h-4 mr-2" /> {t("contactBubble.sendMessage")}
            </Button>
          </div>
        </div>
      )}
      <Button size="icon" className="rounded-full w-12 h-12 shadow-soft" onClick={() => setOpen(!open)}>
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default ContactBubble;


