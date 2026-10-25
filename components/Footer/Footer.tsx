import { footerData } from "@/data/content";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <span className={styles.monogram}>AN</span>
              <span className={styles.name}>Ageless Noir</span>
            </div>
            <p className={styles.blurb}>{footerData.blurb}</p>
            <span className={styles.member}><span className={styles.dot} /> Member of The EmpowrX Family</span>
          </div>

          <div>
            <h3 className={styles.colTitle}>Atelier Navigation</h3>
            <ul className={styles.list}>
              {footerData.navigation.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Sister Entities</h3>
            <ul className={styles.list}>
              {footerData.sister.map((s) => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Concierge Desk</h3>
            <ul className={styles.list}>
              <li>{footerData.address}</li>
              <li><a href={`tel:${footerData.phone.replace(/\s/g, "")}`}>{footerData.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} The EmpowrX Collective. Built for Modern Nigeria. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Sister Brands</a>
            <a href="#">Governance</a>
            <a href={whatsappLink(waMessages.general)} target="_blank" rel="noopener noreferrer">WhatsApp Desk</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}