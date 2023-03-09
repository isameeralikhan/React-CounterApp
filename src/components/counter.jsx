import React, { Component } from 'react';

class Counter extends Component {

    // styles = {
    //     fontWeight: "bold",
    //     fontSize: 10
    // } 55

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
    // };

    render() {
        let classes = this.getBadgeClasses();
        return (
            <div>
            <div>
                <h4>&nbsp;&nbsp;{ this.props.counter.id }</h4>
                <span className={ classes }>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn m-2 btn-secondary btn-sm">Decrement</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            </div>
        ); 
    }; 

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        let { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
}

export default Counter;