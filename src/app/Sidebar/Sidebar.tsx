"use client";

import styles from './sidebar.module.css';
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 1000){
            setIsExpanded(true)
        }
    }, []);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                {isExpanded ? '<<' : '>>'}
            </div>
            {isExpanded && <h4 className="text-center text-white">Mon Portfolio</h4>}
            <div className="d-flex flex-column pt-3">
                <Link href="/" className={styles.navItem}>
                    {isExpanded ? 'Accueil' : 'A'}
                </Link>
                <Link href="/projects" className={styles.navItem}>
                    {isExpanded ? 'Projets' : 'P'}
                </Link>
                <Link href="/about" className={styles.navItem}>
                    {isExpanded ? 'À propos' : 'À'}
                </Link>
                <Link href="/contact" className={styles.navItem}>
                    {isExpanded ? 'Contact' : 'C'}
                </Link>
            </div>
        </div>
    );
}
