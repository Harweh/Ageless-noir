import Image from "next/image";
import { heroTrust } from "@/data/content";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="top" className={styles.hero}>
        <div className={`container ${styles.grid}`}>
            <div>
            <p className={styles.tag}>
                <span className={styles.dot} /> High-touch Lagos atelier • Ikoyi &amp; VI
            </p>
            <h1 className={styles.title}>
                Spaces That Never Go
                <span className={styles.gold}>Out of Style.</span>
            </h1>
            <p className={styles.lead}>
                Curated space revamping, architectural interior design, artisanal botanical candles,
                hotel-grade home scent diffusers, and prime Lagos real estate curation. Built for
                discerning private sanctuaries and high-yield properties.
            </p>
            <div className={styles.actions}>
                <a className="btn btn-gold" href={whatsappLink(waMessages.consultation)} target="_blank" rel="noopener noreferrer">
                Book a Consultation
                </a>
                <a className="btn btn-outline" href="#scents">Explore Collection →</a>
            </div>
            <ul className={styles.trust}>
                {heroTrust.map((t) => (
                <li key={t}>{t}</li>
                ))}
            </ul>
            </div>

            <figure className={styles.card}>
            <Image
                src="/images/hero.jpg"
                alt="Ikoyi waterfront residence living room with limewash walls and brass inlays"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.img}
            />
            <figcaption className={styles.caption}>
                <span className="eyebrow">Architectural Interior Case</span>
                <strong>Ikoyi Waterfront Residence</strong>
                <span className={styles.captionSub}>
                Custom limewash walls, brass inlays &amp; Fig reed scent installation
                </span>
                <span className={styles.chip}>Atmospheric Living</span>
            </figcaption>
            </figure>
        </div>
        </section>
    );
    }