import React from 'react';

import classes from './Item.module.css';
import Aux from '../../../../hoc/Aux';

const Item = ( props ) => {
	return(
		<div className={classes.Content}>
			{/* <div> */}
			<Aux>
				<img alt="moniker " src={props.img} />
				<h4>{props.name}</h4>
				<p>{props.desc}</p>
                <p>₦{props.price}</p>
			</Aux>
			
			{/* </div> */}
		</div>
	);
}

export default Item;
