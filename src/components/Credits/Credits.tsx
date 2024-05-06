import React from "react";
import styles from "./credits.module.css";

export const Credits = () => {
  return (
    <div className={styles.credits}>
      A challenge by
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        aria-label="Link to GreatFrontEnd Projects challenge page"
      >
        {" "}
        GreatFrontEnd Projects
      </a>
      . Built by
      <a
        href="https://www.greatfrontend.com/projects/u/kulembetov"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        aria-label="Link to Artur Kulembetov's GreatFrontEnd profile"
      >
        {" "}
        Artur Kulembetov
      </a>
      .
    </div>
  );
};
