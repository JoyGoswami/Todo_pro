import { AppDataContext } from "../Store/AppDataStore";
import style from "./Welcome.module.css";

import React, { useContext } from "react";

function Welcome() {
  const { noteData } = useContext(AppDataContext);
  console.log(noteData);
  return (
    <h1 className={style.welcome_style}>
      {noteData.length === 0 && "Input Notes"}
    </h1>
  );
}

export default Welcome;
