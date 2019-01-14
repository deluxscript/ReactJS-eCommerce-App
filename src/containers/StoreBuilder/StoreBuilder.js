import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Mystore from '../../components/Mystore/Mystore';

class StoreBuilder extends Component {
    render() {
        return (
            <Aux>
                <Mystore />
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default StoreBuilder;