import React from 'react';

import AddToCartBtn from './AddToCartBtn/AddToCartBtn';
import RemFromCartBtn from './RemFromCartBtn/RemFromCartBtn';

// import StoreItems from '../../Mystore/StoreItems/StoreItems';

import classes from './MystoreControls.module.css';

const MystoreControls =( props ) => {
    return(
        <div className={classes.Content}>
            <AddToCartBtn id= {props.btnId} to={props.btnaction} />
            <RemFromCartBtn id= {props.btnId} />
        </div>
    );
}


export default MystoreControls;