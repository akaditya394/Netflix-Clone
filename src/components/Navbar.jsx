import React from "react";
import styles from "./Navbar.module.css";
import NetflixLogo from "../assests/Netflix-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import UserA from "../assests/usera.png";

function Navbar(props) {
  return (
    <div className={props.className}>
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <div>
            <img className={styles.img} src={NetflixLogo} alt="logo" />
          </div>
          <div>
            <b>Home</b>
          </div>
          <div>TV Shows</div>
          <div>Movies</div>
          <div>New & Popular</div>
          <div>My Lists</div>
          <div>Browse by Languages</div>
        </div>
        <div className={styles.rightSide}>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <img className={styles.profilePic} src={UserA} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
