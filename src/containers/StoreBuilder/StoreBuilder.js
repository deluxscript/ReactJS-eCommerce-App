import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Mystore from '../../components/Mystore/Mystore';

import classes from './StoreBuilder.module.css';

class StoreBuilder extends Component {

    state = {
        cartItemsCount: 0,
        cartItems: [],
        TotalPrice: 0,
        purchaseable: false,
        purchasing: false
    }

    addItemHandler = (item) => {
        
        const newitemsInCart = this.state.cartItems.concat(item.itemName);
        const updatedCartItemsCount = newitemsInCart.length;

        const oldPrice = this.state.TotalPrice;
        const updatedPrice = oldPrice + item.itemPrice;
        
        this.setState({
            cartItemsCount: updatedCartItemsCount,
            cartItems: newitemsInCart,
            TotalPrice: updatedPrice,
            purchaseable: updatedCartItemsCount > 0
        });

    }

    removeItemHandler = (item) => {
        
        const copyItemsinCart = this.state.cartItems;
        const index = copyItemsinCart.indexOf(item.itemName);


        console.log(index);
        
        if (index !== -1) {
            copyItemsinCart.splice(index, 1);
            const updatedCartItemsCount = copyItemsinCart.length;

            const oldPrice = this.state.TotalPrice;
            const updatedPrice = oldPrice-item.itemPrice;

            this.setState({
                cartItems: copyItemsinCart,
                cartItemsCount: updatedCartItemsCount,
                TotalPrice: updatedPrice,
                purchaseable: updatedCartItemsCount > 0
            });
          }
    }

    disableButton = () => {
        const ItemsinCart = this.state.cartItems;

        this.setState({
            purchaseable: ItemsinCart > 0
        });
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    cancelPurchaseHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    continuePurchaseHandler = () => {
        alert('continue');
    }

    render() {
        return (
            <Aux>
                <Mystore
                    cart={this.state.cartItemsCount}
                    items={this.state.cartItems}
                    addItem={this.addItemHandler}
                    removeItem={this.removeItemHandler}
                    totalPrice={this.state.TotalPrice}
                    prchase={this.state.purchaseable}
                    purHandler={this.purchaseHandler}
                    cancelpurHandler={this.cancelPurchaseHandler}
                    continuePurchase={this.continuePurchaseHandler}
                    purchasing={this.state.purchasing}
                    />
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;