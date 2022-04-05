import React from "react";
import styles from "./Home.module.css";
import FAQ from "../components/FAQ";
import NavbarNL from "../components/NavbarNL";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className={styles.upper}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <NavbarNL />
        </div>
        <div className={styles.cta}></div>
      </div>
      <div className={styles.lower}>
        <div className={styles.faqtext}>
          <h1>Frequently Asked Questions</h1>
        </div>
        <FAQ className={styles.faq} />
        <div className={styles.cta}></div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
