import React from "react";
import styles from "./Home.module.css";
import FAQ from "../components/FAQ";
import NavbarNL from "../components/NavbarNL";
import Footer from "../components/Footer";
import Button from "../components/Button";

function Home() {
  return (
    <div className={styles.upper}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <NavbarNL />
        </div>
        <div className={styles.cta}>
          <div>
            <h1>
              Unlimited movies, TV
            </h1>
            <h1>
              shows and more.
            </h1>
          </div>
          <div>
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>
          <div>
            <h5>Ready to watch? Sign In to continue!</h5>
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
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
