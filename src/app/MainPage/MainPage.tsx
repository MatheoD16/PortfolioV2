import styles from "./mainPage.module.css"
import IntroText from "@/app/IntroText/IntroText";
import ProjectsList from "@/app/Projects/ProjectsList";

export default function MainPage() {
    return (
        <>
            <div className={`text-center m-2 shadow border-black rounded p-2 ${styles.mainContent}`}>
                <IntroText/>
            </div>

            <div className={`shadow border-black rounded m-2 p-2 ${styles.mainContent}`}>
                <ProjectsList/>
            </div>
        </>
    );
}
