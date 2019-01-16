import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Mystore from '../../components/Mystore/Mystore';

import classes from './StoreBuilder.module.css';

class StoreBuilder extends Component {

    state = {
        cartItemsCount: 0,
        cartItems: [],
        TotalPrice: 0
    }

    addItemCountHandler = (item) => {
        const newitemsInCart = this.state.cartItems.concat(item);

        // const oldCount = this.state.cartItemsCount;
        const updatedCartItemsCount = newitemsInCart.length;
        
        this.setState({
            cartItemsCount: updatedCartItemsCount,
            cartItems: newitemsInCart
        })
    }

    // addItemHandler = () => {
        
    // }
    render() {
        return (
            <Aux>
                <Mystore
                    cart={this.state.cartItemsCount}
                    items={this.state.cartItems}
                    addItem={this.addItemCountHandler}
                    totalPrice={this.state.TotalPrice}
                    />
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;