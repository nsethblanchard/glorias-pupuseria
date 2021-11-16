import React, { Fragment } from "react";
import headerPic from "../../assets/Gloria's.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gloria's Pupuseria</h1>

        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerPic} alt="Food truck in front of new location" />
      </div>
    </Fragment>
  );
};

export default Header;
