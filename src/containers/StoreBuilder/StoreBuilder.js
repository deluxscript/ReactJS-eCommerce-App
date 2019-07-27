import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Mystore from '../../components/Mystore/Mystore';

import axios from '../../axios-orders';

import classes from './StoreBuilder.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class StoreBuilder extends Component {

    state = {
        storeItems: null,
        cartItemsCount: 0,
        cartItems: [],
        TotalPrice: 0,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/storeItems.json')
        .then(response => {
            this.setState({storeItems: response.data});
        })
        .catch(error => {
            this.setState({error: true});
        });
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
        this.setState({
            loading: true
        });
        const data = {
            items: this.state.cartItems,
            price: this.state.TotalPrice,
            customer:   {
                name: 'Oladele Drille',
                address: {
                    street: 'Yenegoa 1',
                    zipCode: '354623',
                    country: 'Germany'
                },
                email: 'testing@getHeapSnapshot.com'
            },
            deliveryMethod: 'Pay on Delivery'
        }
        axios.post('/orders.json', data)
            .then(response => 
                    this.setState({loading: false, purchasing: false})
                )
            .catch(error =>
                    this.setState({loading: false, purchasing: false})
                );
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
                    loading={this.state.loading}
                    itemsInStore={this.state.storeItems}
                    error={this.state.error}
                    />
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default withErrorHandler(StoreBuilder, axios);