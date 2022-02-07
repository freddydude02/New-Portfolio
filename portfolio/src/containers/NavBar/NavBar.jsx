import Button from "../../components/Button";
import styles from "./NavBar.module.scss";
const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <h1>Frederick Ke</h1>
            <div className={styles["navbar--button-row"]}>
                <Button url={"/"} label="Home"></Button>
                <Button url={"/aboutme"} label="About Me"></Button>
                <Button url={"/contactme"} label="Contact Me"></Button>
                <Button url={"/myprojects"} label="My Projects"></Button>
                <Button url={"/myskills"} label="My Skills"></Button>
            </div>
        </div>
    );
};
export default NavBar;
