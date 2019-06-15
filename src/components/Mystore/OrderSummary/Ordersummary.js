import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const Orders = Object.keys(props.orderItems).map(iKey => {
        return <li key={iKey}>{props.orderItems[iKey]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {Orders}
            </ul>
            <p><strong>Total Price: ₦{props.price}.00</strong></p>
            <Button BtnType="Success" clicked={props.continue}>Continue to Checkout</Button>
            <Button BtnType="Danger" clicked={props.cancel}>Cancel</Button>
        </Aux>
    );
}

export default OrderSummary