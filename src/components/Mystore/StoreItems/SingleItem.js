import React from 'react';

import StoreItems from './StoreItems';

import classes from './SingleItem.module.css';

import Item from './Item/Item';

const SingleItem = ( props ) => {

    const SingleItemArray = StoreItems.map((_, i) => {
		return (
			<Item  
				key={StoreItems[i].id}
				id={StoreItems[i].id}
				name={StoreItems[i].itemName}
                img={StoreItems[i].itemImg}
                price={StoreItems[i].itemPrice}
				desc={StoreItems[i].itemDescription}
			/>
		);
    })
    
    return (
        <div className = {classes.Content}>
            {SingleItemArray}
        </div>
    );
}

export default SingleItem;