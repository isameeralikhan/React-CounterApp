import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, counters, onDecrement, onIncrement, onAdd, onDelete} = this.props;
        
        return (<div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            <button onClick={onAdd} className="btn btn-primary btn-sm m-2">Add Counter</button>
            {counters.map(counter => (
            <Counter key={counter.id} onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} counter={counter}>
            </Counter>
            ))}
        </div>);
    };
}
 
export default Counters;