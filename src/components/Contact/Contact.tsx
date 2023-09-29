import { contactItem } from "@/data/static-data";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.send}>
          <form className={styles.form}>
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="text" name="" id="" placeholder="Your Name" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
