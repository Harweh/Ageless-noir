import { MessageCircle } from "lucide-react";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      className={styles.fab}
      href={whatsappLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ageless Noir on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}