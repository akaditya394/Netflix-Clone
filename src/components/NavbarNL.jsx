import React from "react";
import styles from "./NavbarNL.module.css";
import Netflix from "../assests/Netflix-Logo.png";
import Button from "../components/Button";

function NavbarNL() {
  return (
    <div className={styles.navbarNL}>
      <div>
        <img className={styles.img} src={Netflix} alt="logo" />
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default NavbarNL;
