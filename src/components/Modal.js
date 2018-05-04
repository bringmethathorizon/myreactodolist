import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            listOfItems: []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            userInput: nextProps.userInput,
            listOfItems: nextProps.listOfItems,
        });
    }

    listHandler = (event) => {
        this.setState({ listOfItems: event.target.value });
    };

    handleSave = () => {
        const item = this.state.listOfItems;
        this.props.saveModalDetails(item)
    };

    render() {
        return (
            <div className="myModal modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Item</h5>
                              </div>
                                <div className="modal-body"><input
                                    value={this.state.listOfItems}
                                    onChange={(event) => this.listHandler(event)}
                              />
                              </div>
                                <div className="modal-footer">
                                  <div>
                                    <button
                                    type="button"
                                    className="closeBtn btn btn-secondary"
                                    data-dismiss="modal">
                                  Close</button>
                                </div>
                                    <div>
                                       <button
                                      type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.handleSave.bind(this)}
                                >Save changes</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;