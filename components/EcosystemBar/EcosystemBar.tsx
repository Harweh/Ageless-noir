import { ecosystemBrands } from "@/data/content";
import styles from "./EcosystemBar.module.css";

export default function EcosystemBar() {
    return (
        <div className={styles.bar}>
        <div className={`container ${styles.inner}`}>
            <a href="#" className={styles.back}>← Back to EmpowrX Network</a>
            <span className={styles.label}>EmpowrX Ecosystem</span>
            <nav className={styles.pills} aria-label="EmpowrX brands">
            {ecosystemBrands.map((b) => (
                <a
                key={b.label}
                href={b.href}
                className={`${styles.pill} ${b.active ? styles.active : ""}`}
                aria-current={b.active ? "page" : undefined}
                >
                {b.active && <span className={styles.dot} />}
                {b.label}
                {b.active && <span className={styles.badge}>Active</span>}
                </a>
            ))}
            </nav>
        </div>
        </div>
    );
}