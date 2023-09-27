import styles from "./homePage.module.css";
import Header from "@/components/Header/Header";

type NavItem = {
  id: number;
  title: string;
  url: string;
};

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
}
