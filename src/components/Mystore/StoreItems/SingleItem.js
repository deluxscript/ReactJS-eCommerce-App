import React from 'react';

import StoreItems from './StoreItems';

import classes from './SingleItem.module.css';

import Item from './Item/Item';

const SingleItem = ( props ) => {
    
    return (
        <div className = {classes.Content}>
            {Object
                .keys(StoreItems).map(key => <Item key={key} id={StoreItems[key].id}
                    name={StoreItems[key].itemName}
                    img={StoreItems[key].itemImg}
                    price={StoreItems[key].itemPrice}
                    desc={StoreItems[key].itemDescription}
                    Itemkey={() => props.Item(StoreItems[key].itemName)}
                    />)
                    }
        </div>
    );
}

export default SingleItem;