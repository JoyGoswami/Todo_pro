import style from "./SideNav.module.css";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoArchive } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";

import React from "react";

export default function SideNav() {
  return (
    <aside>
      <div className={style.aside_content}>
        <div className={style.aside_icon_container}>
          <div className={style.aside_icon}>
            <FaRegLightbulb />
          </div>
          <p>Notes</p>
        </div>
        <div className={style.aside_icon_container}>
          <div className={style.aside_icon}>
            <IoArchive />
          </div>
          <p>Archive</p>
        </div>
        <div className={style.aside_icon_container}>
          <div className={style.aside_icon}>
            <IoTrashBin />
          </div>
          <p>Bin</p>
        </div>
      </div>
    </aside>
  );
}
