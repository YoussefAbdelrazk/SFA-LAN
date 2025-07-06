import React, { useEffect, useState } from "react";
import styles from "../css/Loader.module.css";

const WEBSITE_NAME = "SHERIF FRANCA";

const Loader = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(WEBSITE_NAME.slice(0, i + 1));
      i++;
      if (i === WEBSITE_NAME.length) clearInterval(interval);
    }, 120); // Adjust speed here (ms per character)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loaderOverlay}>
      <h1 className={styles.loaderText}>{displayed}</h1>
    </div>
  );
};

export default Loader;
