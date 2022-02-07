import { Routes, Route } from "react-router-dom";
import styles from "./ContentContainer.module.scss";
import Home from "../Home";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";

const ContentContainer = () => {
    return (
        <div className={styles.page}>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
                <Route
                    path="/contactme"
                    element={<ContactMe></ContactMe>}
                ></Route>
                <Route
                    path="/myprojects"
                    element={<MyProjects></MyProjects>}
                ></Route>
                <Route path="/myskills" element={<MySkills></MySkills>}></Route>
            </Routes>
        </div>
    );
};
export default ContentContainer;
