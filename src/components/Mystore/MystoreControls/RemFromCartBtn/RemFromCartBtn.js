import React from 'react';

import classes from './RemFromCartBtn.module.css';

const RemFromCartBtn = ( props ) => (
    <div>
        <button className={classes.Button} onClick={props.delete}>Remove from Cart</button>
    </div>        
);

export default RemFromCartBtn