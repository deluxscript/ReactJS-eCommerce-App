import React from 'react';

import classes from './Item.module.css';
import Aux from '../../../../hoc/Aux';
import MystoreControls from '../../MystoreControls/MystoreControls';

const Item = ( props ) => {
	return(
		<div className={classes.Content}>
			<Aux>
				<img alt="moniker " src={props.img} />
				<h4>{props.name}</h4>
				<p>{props.desc}</p>
                <p>₦{props.price}</p>
				<MystoreControls btnId ={props.id} btnaction={props.Itemkey}/>
			</Aux>
		</div>
	);
}

export default Item;
