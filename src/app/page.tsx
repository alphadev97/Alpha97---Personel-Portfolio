import Hero from "@/components/Hero/Hero";
import styles from "./homePage.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ToastContainer />
    </div>
  );
}
