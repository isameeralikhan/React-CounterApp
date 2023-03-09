import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters: [
        {id : 1, value: 4},
        {id : 2, value: 0},
        {id : 3, value: 0},
        {id : 4, value: 0}
    ]
  };

  handleAdd = () => {
      const counters = [...this.state.counters,{id: this.state.counters.length+1, value: 0}];
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters }); 
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleIncrement = (counterId) => {
      console.log('Increment Clicked', this, counterId);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counterId);
      counters[index].value++;
      this.setState({ counters });
  };

  handleDecrement = (counterId) => {
      console.log('Decrement Clicked', this, counterId);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counterId);
      counters[index].value--;
      this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
