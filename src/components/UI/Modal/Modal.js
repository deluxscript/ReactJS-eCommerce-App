import React, {Component} from "react";

import Aux from "../../../hoc/Aux/Aux"

import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !==this.props.show;
    }
    
    render() {
        const props= this.props
        return(
            <Aux>
                <Backdrop show={props.show} close={props.cancelModal}/>
                <div style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}} className = {classes.Modal}>
                    {props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;