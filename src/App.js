import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Modal from './components/Modal';

class App extends Component {

    constructor(props) {
        super(props);
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);

        this.state = {
            requiredItem: 0,
            userInput: '',
            listOfItems: [],
            isOpen: false
        };
    }
    changeInputHandler = (userInput) => {
        this.setState({
            userInput: userInput.target.value
        });
    };

    addItemHandler = () => {
        if(this.state.userInput==='') {
            alert('enter smth');
            return
        }
        let arrayOfItems = this.state.listOfItems;
        arrayOfItems.push(this.state.userInput);
        this.setState({
            userInput: ''
        });
        this.textInp.focus();
    };
    onEnterPressHandler = (event) => {
        if(event.key === "Enter"){
            this.addItemHandler();
        }
    };

    deleteItemsHandler = (index) =>{
        let arrayOfItems = this.state.listOfItems;
        arrayOfItems.splice(index, 1);
        this.setState({listOfItems: arrayOfItems})
    };
    replaceModalItem = (index) => {
        this.setState({
            requiredItem: index
        });
    };

    saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempItems = this.state.listOfItems;
        tempItems[requiredItem] = item;
        this.setState({
           listOfItems: tempItems
        });
    }

    render() {
        let listItems = this.state.listOfItems.map((val, key) => {
            return <List
                key={key}
                text={val}
                deleteItems={ () => this.deleteItemsHandler(key)}
                replaceModal={ () => this.replaceModalItem(key)}
            />
        });
        const requiredItem = this.state.requiredItem;
        return (
            <main>
                <div className="header card-panel  teal lighten-2">TodoList</div>
                    <div className="row">
                        <div className="input-field col s5">
                            <input
                            type="text"
                              className="input-group mb-3 input-group-text" id="basic-addon1"
                                onChange={(userInput) => this.changeInputHandler(userInput)}
                                 onKeyPress={(this.onEnterPressHandler.bind(this))}
                                 value={this.state.userInput}
                              id="first_name2"
                            ref={((input)=>{this.textInp=input})}
                        />
                        <label
                            className="active myLabel" htmlFor="first_name">
                            </label>
                              <div>
                               <button
                                className="btn-floating btn-large scale-transition btn btn1"
                                type="button"
                                onClick={this.addItemHandler.bind(this)}>
                                <i className="material-icons">add</i>
                                </button>
                               </div>
                             {listItems}
                        </div>
                      <Modal
                        listOfItems={this.state.listOfItems[requiredItem]}
                        saveModalDetails={this.saveModalDetails}
                    />
                </div>
            </main>
        );

    }
}
export default App;

