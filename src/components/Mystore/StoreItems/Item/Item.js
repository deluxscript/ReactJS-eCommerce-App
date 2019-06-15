import React from 'react';

import classes from './Item.module.css';
import Aux from '../../../../hoc/Aux/Aux';
import MystoreControls from '../../MystoreControls/MystoreControls';
// import StoreItems from '../StoreItems';

const Item = ( props ) => {
	return(
		<div className={classes.Content}>
			<Aux>
				<div className={classes.Imgbox}>
					<img alt="moniker " src={props.img} />
				</div>
				<p className={classes.ItemName}>{props.name}</p>
				<p className={classes.ItemSeller}>{props.desc}</p>
                <p className={classes.ItemPrice}>₦{props.price}</p>
				<MystoreControls
					btnId ={props.id}
					btnaction={props.Itemkey}
					remBtnaction={props.remItemKey}
				/>
			</Aux>
		</div>
	);
}

export default Item;
