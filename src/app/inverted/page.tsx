import List from "../list";
import s from "./page.module.css";

export default function Home() {
  return (
    <body className={s.body}>
      <header className={s.header}>
        <h1>Open Source Projects</h1>
        <p>List of open-source projects I have contributed to.</p>
        <hr />
      </header>
      <main>
        <section>
          <h2>Cyber Security Tools</h2>
          <List type="CyberSecurity Tool" />
        </section>
        <section>
          <h2>NPM Packages</h2>
          <List type="NPM Package" />
        </section>
      </main>
      <footer className={s.footer}>
        <br /><hr />
        <p>&copy; {(new Date()).getFullYear()} - Kyle Tolliver</p>
      </footer>
    </body>
  );
}
