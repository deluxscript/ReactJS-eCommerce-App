import React, { Component } from 'react';

import Aux from '../Aux/Aux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state ={
        showSidedrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSidedrawer: false
        });
    }

    sideDrawerOpenHandler = () => {
        this.setState( (prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer};
        });
    }
    render() {
        return(
            <Aux>
                <Toolbar open={this.sideDrawerOpenHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSidedrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;