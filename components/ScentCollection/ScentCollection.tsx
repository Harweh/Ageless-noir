import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/content";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./ScentCollection.module.css";

export default function ScentCollection() {
    return (
        <section id="scents" className="section">
        <div className="container">
            <div className={styles.head}>
            <div>
                <p className={`eyebrow ${styles.kicker}`}>Olfactory Sanctuary</p>
                <h2 className="section-title">Artisanal Scent Collection</h2>
                <p className="section-sub">
                Small batch, hand-poured in Lagos with pure botanical essential essences.
                </p>
            </div>
            <span className={styles.badge}>Free White-Glove Island Delivery Over ₦50,000</span>
            </div>

            <div className={styles.grid}>
            {products.map((p) => (
                <article key={p.name} className={`card ${styles.item}`}>
                <div className={styles.media}>
                    <Image
                    src={p.image}
                    alt={`${p.name}, ${p.tag}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className={styles.img}
                    />
                    <span className={styles.tag}>{p.tag}</span>
                </div>

                <div className={styles.body}>
                    <div className={styles.row}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span className={styles.price}>{p.price}</span>
                    </div>
                    <p className={styles.text}>{p.text}</p>
                    <ul className={styles.specs}>
                    {p.specs.map((s) => (
                        <li key={s}>{s}</li>
                    ))}
                    </ul>
                    <a
                    className={`btn btn-outline ${styles.order}`}
                    href={whatsappLink(waMessages.order(p.name, p.price))}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ShoppingBag size={14} /> Order via WhatsApp
                    </a>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}