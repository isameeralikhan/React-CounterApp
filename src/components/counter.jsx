import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
        //imgurl: "https://picsum.photos/200"
    }; 

    // styles = {
    //     fontWeight: "bold",
    //     fontSize: 10
    // }

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
    }

    handleIncrement = () => {
        console.log('Increment Clicked');
    }

    render() {
        let classes = this.getBadgeClasses();
        return (
            <div>
                <span className={classes} >{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.renderTags()}
            </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    incCount() {
        return this.setState(prevState => { return {count: prevState.count+1}});
    }

    formatCount() {
        let { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;