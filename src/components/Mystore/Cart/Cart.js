import React from 'react';

// import classes from './Cart.module.css';
import Aux from '../../../hoc/Aux';

const Cart = ( props ) => {

    let cartTemplate = props.cartCount;

    if (cartTemplate === 0) {
        cartTemplate = <p>Your cart is so empty!</p>
    }
	return(
		<Aux>
            <h2>Cart</h2>
			{cartTemplate}
            <p>Cart Count: {props.cartCount}</p>
		</Aux>
	);
}

export default Cart;
