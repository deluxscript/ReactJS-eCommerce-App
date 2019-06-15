import React from 'react';

import classes from './Cart.module.css';
import Aux from '../../../hoc/Aux/Aux';

const Cart = ( props ) => {

    let cartTemplate = props.cartCount;
    const itemsInCart = props.cartItems;
    let cartDisplay;

    if (cartTemplate === 0) {
        cartDisplay = <div className={classes.ItemContent}>Your shopping cart is empty!</div>
    }
    else {
        cartDisplay = itemsInCart.map(item => {
            return <div className={classes.ItemContent} key={item}> {item} </div>;
          });
    }
	return(
		<Aux>
            <h2>Cart</h2>
            <p className={classes.Content}>Number of Items in Cart: {props.cartCount}</p>
            <p className={classes.Content}>Total Price: ₦{props.tPrice}.00</p>
			{cartDisplay}
            <button id="checkout" onClick={props.checkout} disabled={!props.disablebtn} className={classes.Button}>Order Now</button>
		</Aux>
	);
}

export default Cart;
