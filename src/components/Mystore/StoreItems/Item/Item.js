import React from 'react';

import classes from './Item.module.css';

const Item = ( props ) => {
	return(
		<div className={classes.Content}>
			<div>
			<img alt="moniker " src={props.img} />
				<h2>{props.name}</h2>
				<p>{props.desc}</p>
                <p>{props.price}</p>
			</div>
		</div>
	);
}

export default Item;
