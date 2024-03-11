import s from "./index.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <br /><hr />
            <p>&copy; {(new Date()).getFullYear()} - Kyle Tolliver</p>
            <p>All rights reserved | Licensed under GPL 3</p>
        </footer>
    )
}

export default Footer;
