import React from "react";
import style from "./Nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function Nav({ toggleStatus, handleToggle }) {
  function handleToggleFromNav() {
    let status = toggleStatus === false ? true : false;

    handleToggle(status);
  }
  return (
    <nav className={style.nav}>
      <div
        onClick={handleToggleFromNav}
        className={`${style.dFlex} ${style.hamburger_menu}`}
      >
        <div className={`${style.hamburger} ${style.nav_icon}`}>
          <RxHamburgerMenu />
        </div>
        <h1>TODO</h1>
      </div>
      <div className={`${style.search_bar} ${style.dFlex}`}>
        <div className={`${style.nav_icon}`}>
          <IoIosSearch />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search"
          id="search"
          className={style.search}
        />
      </div>
      <div className={`${style.settings} ${style.dFlex}`}>
        <div className={style.nav_icon}>
          <IoSettingsOutline />
        </div>
        <div className={style.nav_name_circle}>
          <div className={` ${style.nav_name}`}>
            <p>T</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
