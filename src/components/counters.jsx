import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement, onAdd } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button>
        <button
          onClick={onAdd}
          className="btn btn-success btn-small m-2"
        >
          Add
        </button>
        {counters.map(counter =>
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id}
            counter={counter}
          />)
        }
      </div>
    );
  };
};

export default Counters;
