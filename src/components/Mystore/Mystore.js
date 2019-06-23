import React from 'react';

import classes from './Mystore.module.css';

import Modal from '../UI/Modal/Modal';
import Ordersummary from '../Mystore/OrderSummary/Ordersummary';
import Spinner from '../UI/Spinner/Spinner';

import SingleItem from './StoreItems/SingleItem';
import Cart from './Cart/Cart';
import Aux from '../../hoc/Aux/Aux';

const Mystore = ( props ) => {

    let OrderSummary = <Ordersummary orderItems = {props.items} continue={props.continuePurchase} cancel={props.cancelpurHandler}  price={props.totalPrice}/>;

    if(props.loading){
        OrderSummary = <Spinner />;
    }

    return (
        <Aux>
            <Modal show={props.purchasing} cancelModal = {props.cancelpurHandler}>
                {OrderSummary}
            </Modal>
            <div className={classes.Content}>
                <SingleItem 
                    Add={props.addItem}
                    deleteItem={props.removeItem}
                />
            </div>
            <div className={classes.Cart}>
                <Cart
                    cartCount={props.cart}
                    cartItems={props.items}
                    tPrice={props.totalPrice}
                    disablebtn = {props.prchase}
                    checkout = {props.purHandler}
                />
            </div>
        </Aux>
    );
}

export default Mystore;
