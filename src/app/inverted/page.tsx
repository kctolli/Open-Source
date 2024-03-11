import Main from "@/components/Main";
import Header from "@/components/Header";

import s from "./page.module.css";

export default function Home() {
  return (
    <body className={s.body}>
      <Header />
      <Main />
    </body>
  );
}
