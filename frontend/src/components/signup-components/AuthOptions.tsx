import React, { useState } from "react";
import style from "./styles/authoptions.module.css";

const AuthOptions = () => {
  const [divSelected, setSelectedDiv] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setSelectedDiv(index);
  };
  return (
    <div className={style["auth-options-container"]}>
      <div
        className={style["session"]}
        onClick={() => handleTabClick(0)}
        style={{
          background:
            divSelected == 0
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: divSelected == 0 ? "white" : "black",
        }}
      >
        Session
      </div>
      <div
        className={style["jwt"]}
        onClick={() => handleTabClick(1)}
        style={{
          background:
            divSelected == 1
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: divSelected == 1 ? "white" : "black",
        }}
      >
        JWT
      </div>
      <div
        className={style["oauth"]}
        onClick={() => handleTabClick(2)}
        style={{
          background:
            divSelected == 2
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: divSelected == 2 ? "white" : "black",
        }}
      >
        OAuth2
      </div>
    </div>
  );
};

export default AuthOptions;
