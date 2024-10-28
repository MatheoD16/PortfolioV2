import styles from "@/app/AboutMe/IntroText.module.css";

export default function AboutMe() {
    return (
        <div className={"text-center intro text-white"} style={{marginTop: 50, marginBottom: 50}}>
            <h1 className={"mb-5"}>Informations Personnelles</h1>

            <div className="d-flex flex-wrap text-white justify-content-center">
                <ul className="list-unstyled shadow bg-secondary border-secondary rounded d-flex flex-wrap justify-content-center gap-3">
                    <li className="d-flex justify-content-center m-3" style={{width: '30%'}}>
                        <h2>
                            🎂 20 ans
                        </h2>
                    </li>
                    <li className="d-flex justify-content-center m-3" style={{width: '30%'}}>
                        <h2>
                            💻 BUT 3
                        </h2>
                    </li>
                    <li className="d-flex justify-content-center m-3" style={{width: '30%'}}>
                        <h2>
                            📓 IUT de Lens
                        </h2>
                    </li>
                    <li className="d-flex justify-content-center m-3" style={{width: '30%'}}>
                        <h2>
                            🚗 Permis B
                        </h2>
                    </li>
                </ul>
            </div>

        </div>
    )
}