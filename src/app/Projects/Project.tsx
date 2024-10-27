"use client";

import {useState} from "react";
import ProjectModal from "@/app/Projects/Modal/ProjectModal";
import Image from "next/image";

export default function Project({
                                    title = '',
                                    description = '',
                                    descriptionFull = '',
                                    image = '',
                                    infos = null,
                                    repository = ''
                                }) {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    // Fonction pour gérer la pression de la touche
    function handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Empêche le comportement par défaut de la touche Espace
            handleOpen();
        }
    }

    return (
        <>
            <button
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                className="w-100" // Assure que le bouton prenne toute la largeur de la carte
                style={{background: "transparent", border: "none", cursor: "pointer", padding: 0}}
                aria-haspopup="dialog" // Indique que ce bouton ouvre un dialogue
                aria-expanded={open} // Indique l'état d'ouverture du modal
                aria-label={`Ouvrir le projet: ${title}`} // Fournit une description accessible
            >
                <div className="card text-white shadow" style={{background: "#1d1f2a"}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text text-center">{description}</p>
                        <div style={{position: 'relative', width: '100%', height: '150px'}}>
                            <Image
                                src={image}
                                alt={'Project image'}
                                loading={'lazy'}
                                fill
                                style={{objectFit: 'contain', borderRadius: '8px'}}
                            />
                        </div>
                    </div>
                </div>
            </button>

            <ProjectModal
                open={open}
                onClose={handleClose}
                image={image}
                title={title}
                infos={infos}
                descriptionFull={descriptionFull}
                repository={repository}
            />
        </>
    );
}
