import styles from "./ContactCard.module.scss";
const ContactCard = () => {
    return (
        <div className={styles.page}>
            <div className={[styles.card, styles.card__contact].join(" ")}>
                <h1>Get in touch with me</h1>

                <div className={styles.card__text}>
                    <a href="mailto:frederickkeke@gmail.com" target="_blank">
                        <i class="fas fa-envelope-open-text"></i>
                        frederickkeke@gmail.com
                    </a>

                    <a href="https://github.com/freddydude02">
                        <i class="fab fa-github"></i> My github
                    </a>

                    <a href="https://www.linkedin.com/in/frederickke/">
                        <i class="fab fa-linkedin"></i> My linkedin
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;
