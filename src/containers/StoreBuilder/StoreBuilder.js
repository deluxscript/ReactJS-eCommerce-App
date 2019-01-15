import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Mystore from '../../components/Mystore/Mystore';

import classes from './StoreBuilder.module.css';

class StoreBuilder extends Component {

    state = {
        cartItems: 0
    }
    render() {
        return (
            <Aux>
                <Mystore cart={this.state.cartItems}/>
                <div className={classes.Control}>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;