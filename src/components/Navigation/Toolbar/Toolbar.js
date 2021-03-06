import React from 'react';

import classes from "./Toolbar.module.css";
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import HamburgerMenu from '../SideDrawer/HamburgerMenu/HamburgerMenu';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HamburgerMenu openHandler={props.open} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar;