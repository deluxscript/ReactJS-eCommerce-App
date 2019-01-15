import React from 'react';

import StoreItems from './StoreItems';

import classes from './SingleItem.module.css';

import Item from './Item/Item';
import Aux from '../../../hoc/Aux';
import MystoreControls from '../MystoreControls/MystoreControls';

const SingleItem = ( props ) => {

    // const SingleItemArray = StoreItems.map((key => {
	// 	return (
    //         <Aux>
    //             <Item  
    //                 key={StoreItems[i].id}
    //                 id={StoreItems[i].id}
    //                 name={StoreItems[i].itemName}
    //                 img={StoreItems[i].itemImg}
    //                 price={StoreItems[i].itemPrice}
    //                 desc={StoreItems[i].itemDescription}
    //             />
    //         </Aux>
	// 	);
    // })
    
    return (
        <div className = {classes.Content}>
            {Object
                .keys(StoreItems).map(key => <Item key={key} id={StoreItems[key].id}
                    name={StoreItems[key].itemName}
                    img={StoreItems[key].itemImg}
                    price={StoreItems[key].itemPrice}
                    desc={StoreItems[key].itemDescription}/>)
                    }
        </div>
    );
}

export default SingleItem;