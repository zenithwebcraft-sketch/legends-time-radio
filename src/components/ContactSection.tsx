import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-20 px-4 bg-secondary/50 border-t border-border mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-gold glow-gold mb-10 tracking-wider">
          CONTACTO
        </h2>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/584127172911"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-body font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_hsl(142_70%_35%/0.4)] mb-10"
        >
          <MessageCircle size={22} />
          Contáctanos por WhatsApp
        </a>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Instagram, href: "https://www.instagram.com/legendsinthetime/", label: "Instagram" },
            { icon: Youtube, href: "https://www.youtube.com/@legendsinthetime2320", label: "YouTube" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold hover:scale-[1.2] transition-all duration-300"
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground font-body text-sm">
          © 2026 Legends in the Time Radio — Guarenas, Venezuela
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;
