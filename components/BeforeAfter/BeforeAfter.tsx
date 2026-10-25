import Image from "next/image";
import { beforeAfter } from "@/data/content";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
    return (
        <section id="before-after" className="section">
        <div className="container">
            <div className={`card ${styles.wrap}`}>
            <div className={styles.head}>
                <p className={`eyebrow ${styles.kicker}`}>Transformational Proof</p>
                <h2 className="section-title">Before &amp; After Transformation Showcase</h2>
                <p className="section-sub">
                Direct side-by-side comparison: from cold, builder-grade rental shell to bespoke
                Ageless Noir sanctuary in Lekki Phase 1.
                </p>
            </div>

            <div className={styles.grid}>
                {beforeAfter.map((p) => (
                <figure key={p.kind} className={styles.panel}>
                    <div className={styles.meta}>
                    <span className={`${styles.pill} ${p.kind === "before" ? styles.before : styles.after}`}>
                        {p.label}
                    </span>
                    <span className={p.kind === "before" ? styles.muted : styles.gold}>{p.note}</span>
                    </div>
                    <div className={styles.frame}>
                    <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                        className={styles.img}
                    />
                    <figcaption className={styles.caption}>{p.caption}</figcaption>
                    {p.badge && <span className={styles.verified}>{p.badge}</span>}
                    </div>
                </figure>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
}