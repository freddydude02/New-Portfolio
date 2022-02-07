import styles from "./Button.module.scss";

const Button = ({ label, url }) => {
    return (
        <div>
            <a
                className={[
                    styles.button,
                    styles.button__border,
                    styles.button__hover,
                    styles.button__onclick,
                ].join(" ")}
                href={url}
            >
                {label}
            </a>
        </div>
    );
};
export default Button;
