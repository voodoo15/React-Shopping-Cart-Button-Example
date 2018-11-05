import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [{
      id: 1,
      value: 0
    },
    {
      id: 2,
      value: 0
    },
    {
      id: 3,
      value: 0
    },
    {
      id: 4,
      value: 0
    }
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };

    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({
        counters
      });
    }

  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleAdd = () => {
    const counters = this.state.counters;

    if (counters.length === 0) {
      counters.push({
        id: 0,
        value: 0
      });
    } else {
      let lastCounterId = parseInt(counters[counters.length - 1].id);
      lastCounterId++;

      counters.push({
        id: lastCounterId,
        value: 0
      });
    }
    this.setState({
      counters
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={
          this.state.counters.filter(c => c.value > 0).length
        }
        />
        <main className="container">
          <Counters counters={
            this.state.counters
          }
            onDelete={
              this.handleDelete
            }
            onIncrement={
              this.handleIncrement
            }
            onDecrement={
              this.handleDecrement
            }
            onReset={
              this.handleReset
            }
            onAdd={
              this.handleAdd
            }
          />
        </main>
      </React.Fragment>
    );
  };
};

export default App;