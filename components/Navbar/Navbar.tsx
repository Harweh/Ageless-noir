"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { waMessages, whatsappLink } from "@/lib/whatsapp";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const cta = whatsappLink(waMessages.consultation);

    return (
        <header className={styles.nav}>
        <div className={`container ${styles.inner}`}>
            <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.monogram}>AN</span>
            <span>
                <span className={styles.name}>Ageless Noir</span>
                <span className={styles.tagline}>Interior Atelier &amp; Fragrance</span>
            </span>
            </a>

            <nav className={styles.links} aria-label="Primary">
            {navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            </nav>

            <a className={`btn btn-gold ${styles.cta}`} href={cta} target="_blank" rel="noopener noreferrer">
            Book a Consultation
            </a>

            <button
            className={styles.toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
            </button>
        </div>

        <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
            {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a className="btn btn-gold" href={cta} target="_blank" rel="noopener noreferrer">
            Book a Consultation
            </a>
        </div>
        </header>
    );
}