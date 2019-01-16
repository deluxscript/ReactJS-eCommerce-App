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

    addItemHandler = (item) => {
        const newitemsInCart = this.state.cartItems.concat(item);
        const updatedCartItemsCount = newitemsInCart.length;
        
        this.setState({
            cartItemsCount: updatedCartItemsCount,
            cartItems: newitemsInCart
        })
    }

    removeItemHandler = (item) => {
        
        const copyItemsinCart = this.state.cartItems;
        const index = copyItemsinCart.indexOf(item);
        
        if (index !== -1) {
            copyItemsinCart.splice(index, 1);
            const updatedCartItemsCount = copyItemsinCart.length;
            this.setState({
                cartItems: copyItemsinCart,
                cartItemsCount: updatedCartItemsCount
            });
          }
    }

    // disableButton = (item) => {
    //     const copyItemsinCart = this.state.cartItems;
    //     let index = copyItemsinCart.indexOf(item);

    //     console.log(index = 0);
    // }

    render() {
        return (
            <Aux>
                <Mystore
                    cart={this.state.cartItemsCount}
                    items={this.state.cartItems}
                    addItem={this.addItemHandler}
                    removeItem={this.removeItemHandler}
                    totalPrice={this.state.TotalPrice}
                    />
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;