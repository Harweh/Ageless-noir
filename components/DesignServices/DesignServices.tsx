import { Sparkles, Palette, Building2, TrendingUp, Building } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { services } from "@/data/content";
import styles from "./DesignServices.module.css";

const icons = [Sparkles, Palette, Building2, TrendingUp, Building];

export default function DesignServices() {
    return (
        <section id="services" className="section">
        <div className="container">
            <SectionHeader
            align="split"
            eyebrow="Curated Execution"
            title="Interior Design Services"
            aside="Tailored for discerning homeowners, investors, and hospitality developers seeking timeless character without compromise."
            />

            <div className={styles.grid}>
            {services.map((s, i) => {
                const Icon = icons[i];
                return (
                <article key={s.title} className={`card ${styles.item}`}>
                    <div className={styles.top}>
                    <Icon size={18} strokeWidth={1.5} className={styles.icon} />
                    <span className={styles.num}>{s.n}</span>
                    </div>
                    <h3 className={styles.title}>{s.title}</h3>
                    <p className={styles.text}>{s.text}</p>
                    <p className={styles.meta}>{s.meta}</p>
                </article>
                );
            })}
            </div>
        </div>
        </section>
    );
}