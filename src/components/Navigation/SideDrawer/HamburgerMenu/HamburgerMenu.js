import React from 'react';

import classes from "./HamburgerMenu.module.css";


const HamburgerMenu = (props) => (
    <div className={classes.HamburgerMenu} onClick={props.openHandler}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default HamburgerMenu;