import React from 'react';
import ReactDOM from 'react-dom';

class SearchRes extends React.Component {

    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
    };

    changeHandler() {
       this.props.formClickHandler();
    }


    render() {
        return (<div><p>For SearchRes for: {this.props.userType} with term: {this.props.searchTerm}</p>
        <button onClick={this.changeHandler}>clickMe!</button></div>);
    }

}

export default SearchRes