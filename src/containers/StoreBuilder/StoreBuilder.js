import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Mystore from '../../components/Mystore/Mystore';

import classes from './StoreBuilder.module.css';

class StoreBuilder extends Component {

    state = {
        cartItemsCount: 0,
        cartItems: []
    }

    addItemCountHandler = (i) => {
        console.log('clicked');
    }

    // addItemHandler = () => {
        
    // }
    render() {
        return (
            <Aux>
                <Mystore
                    cart={this.state.cartItemsCount}
                    cartCount={this.addItemCountHandler}
                    />
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;