"use client";

import styles from './sidebar.module.css';
import Link from "next/link";
import {useState} from "react";
import {DeveloperBoard, Email, GitHub, Home, Person} from "@mui/icons-material";
import Image from "next/image";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <div className={styles.toggleButton} onClick={toggleSidebar}>
                {isExpanded ? '<<' : '>>'}
            </div>
            <div className="d-flex flex-column">

                <a href="#accueil" className={styles.navItem}>
                    {isExpanded ? <h4 className="text-center text-white">Mon Portfolio</h4> : <Home/>}
                </a>
                <a href="#aboutMe" className={styles.navItem}>
                    {isExpanded ? 'À propos' : <Person/>}
                </a>
                <a href="#projects" className={styles.navItem}>
                    {isExpanded ? 'Projets' : <DeveloperBoard/>}
                </a>
                <a href="#contact" className={styles.navItem}>
                    {isExpanded ? 'Contact' : <Email/>}
                </a>
            </div>
        </div>
    );
}
