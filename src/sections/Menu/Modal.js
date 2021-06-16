import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/modal.css'

class ModalRoot extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen : props.modalProps.open
        }

        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
          this.setState({
            modalIsOpen: nextProps.modalProps.open
          })
        }
    }
    
    closeModal() {
        console.log(this.props.modalProps);
        this.props.modalProps.closeModal();
    }

    render(){
        return ( this.props.modalProps.open ? 
            <Modal
                show={this.props.modalProps.open}
                onHide={this.closeModal}
                size="lg"
                centered
            >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalProps.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="text-center">
                            <img src={this.props.modalProps.img} alt={this.props.modalProps.name} className="img-fluid"/>
                        </div>
                        
                        <p>{this.props.modalProps.description}</p>
                        <ul>Ingredients:
                            {this.props.modalProps.ingredients.map((val, index) => 
                                <li key={index}>{val}</li>
                            )  
                                
                            }
                        </ul>
                    </Modal.Body>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            </Modal>
            : null
        );
    }
}

const mapStateToProps = state => ({
    ...state.modal
});

export default connect(mapStateToProps,null)(ModalRoot);