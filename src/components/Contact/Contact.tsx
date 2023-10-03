import { contactItem, copyrightItem } from "@/data/static-data";
import styles from "./contact.module.css";
import { ContactUs } from "../Form/sendForm";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>{contactItem.title}</h1>
      <div className={styles.contact}>
        <div className={styles.content}>
          <p className={styles.desc}>{contactItem.description}</p>
          <div className={styles.links}>
            <div className={styles.link}>
              <div className={styles.icon}>
                <HiOutlineMail />
              </div>

              <Link href={contactItem.contact_items[0].url}>
                <p>{contactItem.contact_items[0].title}</p>
              </Link>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <BsTelephone />
              </div>

              <Link href={contactItem.contact_items[1].url}>
                <p>{contactItem.contact_items[1].title}</p>
              </Link>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <FaLinkedinIn />
              </div>

              <Link href={contactItem.contact_items[2].url}>
                <p>{contactItem.contact_items[2].title}</p>
              </Link>
            </div>
          </div>
        </div>
        <ContactUs />
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightContent}>
          &copy; 2023 Copyright Protected,{" "}
          <b>
            <a href={copyrightItem.url}>{copyrightItem.name}</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Contact;
