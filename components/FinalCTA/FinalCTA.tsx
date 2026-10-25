import { MessageSquare, MessageCircle } from "lucide-react";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={`card ${styles.box}`}>
          <span className={styles.icon}><MessageSquare size={20} strokeWidth={1.5} /></span>
          <h2 className={styles.title}>Elevate Your Sensory Space.</h2>
          <p className={styles.text}>
            Speak directly with an Ageless Noir interior stylist on WhatsApp to commission a custom
            revamp, curate scents, or schedule real estate viewings across Lagos.
          </p>
          <a className="btn btn-gold" href={whatsappLink(waMessages.stylist)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} /> Speak with Lead Stylist on WhatsApp
          </a>
          <p className={styles.note}>Direct response within 15 minutes during atelier hours (9 AM - 7 PM WAT)</p>
        </div>
      </div>
    </section>
  );
}