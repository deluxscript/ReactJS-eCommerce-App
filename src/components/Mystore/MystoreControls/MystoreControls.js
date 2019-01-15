import React, {Component} from 'react';

import AddToCartBtn from './AddToCartBtn/AddToCartBtn';
import RemFromCartBtn from './RemFromCartBtn/RemFromCartBtn';

// import StoreItems from '../../Mystore/StoreItems/StoreItems';

import classes from './MystoreControls.module.css';

class MystoreControls extends Component {
    render() {
        return(
            <div className={classes.Content}>
                <AddToCartBtn />
                <RemFromCartBtn />
            </div>
        );
    }
}

export default MystoreControls;