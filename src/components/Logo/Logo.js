import React from "react";

import logoImage from "./../../assets/images/online-shop.png";

import classes from "./Logo.module.css";
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="brand_img"/>
    </div>
);

export default Logo;