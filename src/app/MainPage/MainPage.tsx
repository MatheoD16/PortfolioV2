import styles from "./mainPage.module.css"
import IntroText from "@/app/AboutMe/IntroText";
import ProjectsList from "@/app/Projects/ProjectsList";
import AboutMe from "@/app/AboutMe/AboutMe";
import Contact from "@/app/AboutMe/Contact";

export default function MainPage() {

    //TODO Améliorer logos sidebar + footer

    return (
        <>
            <div className={`text-center m-2 shadow border-black rounded p-2 ${styles.mainContent}`}>
                <IntroText/>
            </div>

            <div className={`text-center mt-4 mb-4 m-2 shadow border-black rounded p-2 ${styles.mainContent}`}>
                <AboutMe/>
            </div>

            <div className={`shadow border-black rounded m-2 p-2 ${styles.mainContent}`}>
                <ProjectsList/>
            </div>

            <div className={`text-center mt-4 mb-4 m-2 shadow border-black rounded p-2 ${styles.mainContent}`}>
                <Contact/>
            </div>
        </>
    );
}
