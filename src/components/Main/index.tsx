import List from "./List";

const Main = () => {
    return (
        <main>
            <section>
                <h2>Cyber Security Tools</h2>
                <List type="CyberSecurity Tool" />
            </section>
            <section>
                <h2>NPM Packages</h2>
                <List type="NPM Package" />
            </section>
            <section>
                <h2>Web Apps and Services</h2>
                <List type="Web App" />
            </section>
        </main>
    )
}

export default Main;
