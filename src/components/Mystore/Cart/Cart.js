import React from 'react';

import classes from './Cart.module.css';
import Aux from '../../../hoc/Aux';

const Cart = ( props ) => {

    let cartTemplate = props.cartCount;
    const itemsInCart = props.cartItems;

    let cartDisplay = itemsInCart.map(item => {
        return <div className={classes.ItemContent} key={item}> {item} </div>;
      });

    if (cartTemplate === 0) {
        cartDisplay = <div className={classes.ItemContent}>Your shopping cart is empty!</div>
    }
	return(
		<Aux>
            <h2>Cart</h2>
            <p className={classes.Content}>Number of Items in Cart: {props.cartCount}</p>
            <p className={classes.Content}>Total Price: ₦{props.tPrice}.00</p>
			{cartDisplay}
            <button className={classes.Button}>Checkout</button>
		</Aux>
	);
}

export default Cart;
