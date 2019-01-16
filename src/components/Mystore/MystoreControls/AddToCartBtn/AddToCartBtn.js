import React from 'react';

import classes from './AddToCartBtn.module.css';

const AddToCartBtn = ( props ) => (
    <div>
        <button className={classes.Button} onClick={props.to}>Add to Cart</button>
    </div>        
);

export default AddToCartBtn