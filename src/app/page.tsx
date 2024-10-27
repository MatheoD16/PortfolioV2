import "./page.module.css";
import Sidebar from "@/app/Sidebar/Sidebar";
import MainPage from "@/app/MainPage/MainPage";

export default function Home() {
    return (
        <div className="d-flex">
            <Sidebar />

            <div className="flex-grow-1 p-4" style={{ marginLeft: '60px' }}>
                <MainPage />
            </div>
        </div>
    );
}
