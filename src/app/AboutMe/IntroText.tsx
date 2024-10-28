import styles from "./IntroText.module.css";

export default function IntroText() {
    return (
        <>
            <div className={`intro text-white ${styles.intro}`} style={{marginTop: 210, marginBottom: 210}}>
                <h1>Mathéo Dupuis</h1>

                <h2>Hey 👋, bienvenue sur mon portfolio !</h2>
                <h5>Ici, vous en apprendrez un peu plus sur moi.</h5>

                <a href={"https://drive.google.com/file/d/1PtCDHWME6sXVGJhl_RD71-ifzLvlE50-/view?usp=sharing"}
                   target={"_blank"}>
                    <button className={`btn mt-3 btn-info text-white ${styles.btn}`}><strong>Mon CV</strong></button>
                </a>
            </div>
        </>
    );
}
