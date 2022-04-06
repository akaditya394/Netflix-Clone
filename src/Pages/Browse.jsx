import React from "react";
import styles from "./Browse.module.css";
import Navbar from "../components/Navbar";
import Suggestions from "../components/Suggestions";
import PeakyBlinders from "../assests/PeakyBlinders5.mp4";
import PBPoster from "../assests/PBPoster.jpg";
import Footer from "../components/Footer";

function Browse() {
  return (
    <div className={styles.browse}>
      <div className={styles.main}>
        <Navbar className={styles.navbar} />
        <video id="video_background" autoPlay={true} loop poster={PBPoster}>
          <source src={PeakyBlinders} type="video/mp4" />
          <source src={PeakyBlinders} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Suggestions />
      <Suggestions />
      <Suggestions />
      <Footer className={styles.footer}/>
    </div>
  );
}

export default Browse;
