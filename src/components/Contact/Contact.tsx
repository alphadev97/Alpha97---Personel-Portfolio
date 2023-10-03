import { contactItem, copyrightItem } from "@/data/static-data";
import styles from "./contact.module.css";
import Image from "next/image";
import { ContactUs } from "../Form/sendForm";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>{contactItem.title}</h1>
      <div className={styles.contact}>
        <div className={styles.content}>
          <p className={styles.desc}>{contactItem.description}</p>
          <div className={styles.links}>
            {contactItem.contact_items.map((link) => (
              <div className={styles.link}>
                <Image
                  className={styles.icon}
                  src={link.image_url}
                  height={50}
                  width={50}
                  alt=""
                />
                <p>{link.title}</p>
              </div>
            ))}
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
