import Project from "@/app/Projects/Project";
import styles from "./project.module.css"

export default function ProjectsList() {

    return (
        <>
            <div id="projects" className={`text-center project text-white ${styles.project}`} style={{marginTop: 50, marginBottom: 50}}>
                <h1 className={"text-white text-center mb-5 text-start"}>Mes projets</h1>

                {/*First row*/}
                <div className={"row text-white"}>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"TicTacToe"}
                            repository={"https://github.com/MatheoD16/Tic-Tac-Toe"}
                            description={"Un jeu du morpion qui a été développé en Java avec JavaFx."}
                            descriptionFull={
                                "Ce projet est un jeu de morpion que j'ai réalisé en à peu près 1 semaine pendant mon temps libre." +
                                " J'ai utilisé Java car c'est un langage que j'aime."
                            }
                            image={"/PortfolioV2/TicTacToe.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Java / JavaFx
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            1 personne
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 1 semaine
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet personnel
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"KC-pendu"}
                            repository={"https://github.com/MatheoD16/KC-Pendu"}
                            description={"Un petit projet web de jeu du pendu avec les membres de la Karmine Corp en Javascript. "}
                            descriptionFull={
                                "Ce projet est un petit site internet réalisé sans Framework, j'ai juste utilisé Boostrap pour une partie du CSS" +
                                " et javascript pour toute la logique du site. " +
                                "Il permet de jouer au pendu avec le nom des membres de la Kcorp, une équipe esport que j'aime beaucoup. " +
                                "Le site n'est pas en ligne mais le code est disponible sur Github."
                            }
                            image={"/PortfolioV2/Kc-pendu.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Javascript
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            1 personne
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 2 semaines
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet personnel
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"Raytracer"}
                            description={"Une librairie Java pour générer des images à partir d'un fichier de configuration."}
                            descriptionFull={
                                "Ce projet est un projet de groupe que j'ai fais pour mes études. " +
                                "Il consiste en une librairie Java qui permet de générer des images à partir d'un fichier de configuration."
                            }
                            image={"/PortfolioV2/RayTracer.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Java
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            4 personnes
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 1 semaine
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet d'étude
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                </div>

                {/*Second Row*/}
                <div className={"row text-white"}>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"WebPoke"}
                            repository={"https://github.com/MatheoD16/Webpoke"}
                            description={"Un projet web développé en Flask qui est un Pokedex en ligne utilisant l'api pokemon. "}
                            descriptionFull={
                                "Ce projet est un pokedex en ligne. Il utilise une api pokemon openSource. " +
                                "Il a été réalisé en Flask et c'est la première fois que j'ai utilisé cette technologie."
                            }
                            image={"/PortfolioV2/WebPoke.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Flask / Python
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            5 personnes
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 1 mois
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet d'étude
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"Flatcraft"}
                            repository={"https://github.com/MatheoD16/Flatcraft"}
                            description={"Un jeu développé en Java, qui reprend le concept de Minecraft mais en 2D."}
                            descriptionFull={
                                "Ce projet réalisé pendant mes heures de cours est une version de minecraft mais jouable en 2D. " +
                                "C'est un des projets les plus important que j'ai fais durant mes études. " +
                                "La répartition des tâches et le travail collaboratif étaient cruciaux."
                            }
                            image={"/PortfolioV2/Flatcraft.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Java
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            4 personnes
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 3 mois
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet d'étude
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <Project
                            title={"ReadNLive"}
                            repository={"https://github.com/MatheoD16/Read-nLine"}
                            description={"Un site web réalisé en équipe pendant 2 jours, qui permet de visualiser des histoires à choix."}
                            descriptionFull={
                                "Ce projet est un site permettant de lire et de créer des histoires à choix. " +
                                "Il a été réalisé dans le cadre d'un évènement de mon école. " +
                                "Nous étions répartis par groupes de 8 et avions 36h pour mener à bien le projet."
                            }
                            image={"/PortfolioV2/ReadNLive.png"}
                            infos={
                                <div className={'justify-content-center'}>
                                    <ul className={'row list-unstyled'}>
                                        <li className={'col-6 mt-2'}>
                                            Laravel / PHP
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            8 personnes
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Pendant 36h
                                        </li>

                                        <li className={'col-6 mt-2'}>
                                            Projet d'étude
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>

                </div>
            </div>
        </>
    );
}