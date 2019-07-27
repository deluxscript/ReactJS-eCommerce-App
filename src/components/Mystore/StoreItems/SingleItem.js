import React from 'react';

// import StoreItems from './StoreItems';

import classes from './SingleItem.module.css';

import Item from './Item/Item';

const SingleItem = ( props ) => {
    
    return (
        <div className = {classes.Content}>
            {Object
                .keys(props.storeItems).map(key => <Item key={key} id={props.storeItems[key].id}
                    name={props.storeItems[key].itemName}
                    img={props.storeItems[key].itemImg}
                    price={props.storeItems[key].itemPrice}
                    desc={props.storeItems[key].itemDescription}
                    Itemkey={() => props.Add(props.storeItems[key])}
                    remItemKey={() => props.deleteItem(props.storeItems[key])}
                    />)
                    }
        </div>
    );
}

export default SingleItem;