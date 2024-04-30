import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

export default function RobotFooterIcon() {
  return (
    <section>
      <div className={clsx("container", styles.robotFooterContainer)}>
        <img
          className={styles.robotFooterIcon}
          src={useBaseUrl("/img/robot-footer.svg")}
        />
      </div>
    </section>
  );
}
