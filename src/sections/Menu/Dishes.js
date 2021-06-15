import '../../styles/dishes.css'

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import * as images from './img/imageLoader';
import { showModal, hideModal} from '../../actions/modalActions';

class Dish extends React.Component{
    constructor(props){
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal(){
        const {name, description, ingredients, img} = this.props.data;
        this.props.showModal({
            open : true,
            name,
            img : images[img],
            description,
            ingredients,
            closeModal: this.props.hideModal
        })
    }
    closeModal() {
        this.props.hideModal();
    }

    render(){
        const {name, description, img} = this.props.data;
        return(
            <Card style={{ width: '20rem' }} onClick={this.openModal}>
                <Card.Img variant="top" src={images[img]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({ 
    hideModal: () => dispatch(hideModal()),
    showModal: modalProps => {
     dispatch(showModal(modalProps))
    }
})
export default connect(null, mapDispatchToProps)(Dish);