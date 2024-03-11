import s from "./index.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <h1>Open Source Projects</h1>
            <p>List of open-source projects I have contributed to.</p>
            <hr />
        </header>
    );
}

export default Header;
