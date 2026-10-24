import { House, Flame } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { pillars } from "@/data/content";
import styles from "./TwinDisciplines.module.css";

const icons = [House, Flame];

export default function TwinDisciplines() {
    return (
        <section id="disciplines" className="section">
        <div className="container">
            <SectionHeader
            eyebrow="The Ageless Method"
            title="Twin Disciplines of Elegance"
            sub="Sensory spatial architecture harmonized with artisanal olfactory signatures."
        />

        <div className={styles.grid}>
            {pillars.map((p, i) => {
                const Icon = icons[i];
                return (
                <article key={p.title} className={`card ${styles.pillar}`}>
                    <div className={styles.top}>
                    <span className={styles.icon}>
                        <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className={styles.tag}>{p.tag}</span>
                    </div>

                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.text}>{p.description}</p>

                    <ul className={styles.list}>
                    {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                    </ul>

                    <a href={p.cta.href} className={styles.link}>
                    {p.cta.label} →
                    </a>
                </article>
                );
            })}
            </div>
        </div>
        </section>
    );
}