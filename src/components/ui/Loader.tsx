// import React, { useEffect, useState } from "react";
import styles from "../css/Loader.module.css";
import BlurText from "./BlureText";

const WEBSITE_NAME = "SHERIF FRANCA";

const Loader = () => {


  // useEffect(() => {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     setDisplayed(WEBSITE_NAME.slice(0, i + 1));
  //     i++;
  //     if (i === WEBSITE_NAME.length) clearInterval(interval);
  //   }, 120); // Adjust speed here (ms per character)
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={styles.loaderOverlay}>
     <BlurText
  text={WEBSITE_NAME}
  delay={180}
  threshold={0.1}

  animateBy="letters"
  direction="top"

  className="text-5xl mb-8 text-[#3E1492]"
/>
    </div>
  );
};

export default Loader;
