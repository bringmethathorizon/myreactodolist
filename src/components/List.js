import React, { Component } from 'react';
class List extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className="collection items">
                    <a className="collection-item items">
                        {this.props.text}
                        <i className="far fa-trash-alt deleteIcon"
                            onClick={this.props.deleteItems}
                        >
                             </i>
                        <a data-toggle="modal"
                                data-target="#exampleModal"
                            onClick={this.props.replaceModal}
                        >
                        <i className =" editIcon far fa-edit"></i></a>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default List;