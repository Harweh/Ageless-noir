import styles from "./SectionHeader.module.css";

type Props = {
    eyebrow: string;
    title: string;
    sub?: string;
    aside?: string; // small right-aligned text (used by split layout)
    align?: "center" | "split";
};

export default function SectionHeader({ eyebrow, title, sub, aside, align = "center" }: Props) {
    return (
        <div className={`${styles.header} ${styles[align]}`}>
        <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            {sub && <p className="section-sub">{sub}</p>}
        </div>
        {aside && <p className={styles.aside}>{aside}</p>}
        </div>
    );
}