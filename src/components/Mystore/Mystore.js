import React from 'react';

import classes from './Mystore.module.css';

import SingleItem from './StoreItems/SingleItem';
import Cart from './Cart/Cart';
import Aux from '../../hoc/Aux';

const Mystore = ( props ) => {

    return (
        <Aux>
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
                />
            </div>
        </Aux>
    );
}

export default Mystore;
