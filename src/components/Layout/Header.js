import React from "react";
import headerPic from "../../assets/Gloria's.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Gloria's Pupuseria</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerPic} alt="Food truck in front of new location" />
      </div>
    </>
  );
};

export default Header;
