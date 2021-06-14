import '../../styles/dishes.css'

import React from 'react';
import { Card } from 'react-bootstrap';
import * as images from './img/imageLoader';

export default class Dish extends React.Component{
    constructor(props){
        super(props);

        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        console.log("clicked")
    }

    render(){
        const {name, description, ingredients, img} = this.props.data;
        return(
            <Card style={{ width: '20rem' }} onClick={this.showModal}>
                <Card.Img variant="top" src={images[img]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}