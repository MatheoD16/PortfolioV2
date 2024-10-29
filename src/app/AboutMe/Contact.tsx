import styles from "@/app/AboutMe/IntroText.module.css";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div id="contact" className={`intro text-center text-white ${styles.intro}`}
                 style={{marginTop: 100, marginBottom: 100}}>
                <h1 className={"mb-5"}>Me Contacter</h1>

                <div className="row justify-content-center">
                    {/* Carte Email */}
                    <div className="col-12 col-md-5 mb-3">
                        <div className="card text-white shadow" style={{background: "#1d1f2a", height: "100%"}}>
                            <div className="card-body text-center">
                                <h2 className={"mb-3"}>Mon Mail</h2>
                                <h3>matheodupuis1@gmail.com</h3>
                                <a href="mailto:matheodupuis1@gmail.com"
                                   className="btn btn-info text-white mt-2 w-auto"><strong>Me contacter</strong></a>
                            </div>
                        </div>
                    </div>

                    {/* Carte GitHub */}
                    <div className="col-12 col-md-5 mb-3">
                        <div className="card text-white shadow" style={{background: "#1d1f2a", height: "100%"}}>
                            <div className="card-body text-center">
                                <h2 className={"mb-3"}>Mon GitHub</h2>
                                <a href={"https://github.com/MatheoD16"} target={'_blank'}>
                                    <div style={{position: 'relative', width: '100%', height: '75px'}}
                                         className={"mt-2 mb-2"}>
                                        <Image src={'/github-mark-white.svg'}
                                               alt={'Github logo'}
                                               loading={'lazy'}
                                               width='150'
                                               height='75'
                                               style={{objectFit: 'contain', borderRadius: '2px'}}
                                        />
                                    </div>
                                </a>
                                <h3>MatheoD16</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className={'mt-5'}><strong>MatheoD16 © 2024</strong></h3>
            </div>
        </>
    );
}
