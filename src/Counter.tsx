import React, { Component } from 'react';

// Step 1: Define an empty interface for props since Counter receives none.
interface CounterProps {}

// Step 2: Define an interface for the state shape.
// Here, the state contains a single numeric 'count' property.
interface CounterState {
  count: number;
}

// Step 3: Extend React.Component with the props and state types.
// This ensures type safety when using props and state in the class.
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Initialize state with type safety according to CounterState interface.
  state: CounterState = {
    count: 0,
  };

  // Step 5: Define an increment method that updates state correctly.
  // Using arrow function to bind 'this' automatically.
  increment = () => {
    // Update the 'count' state by increasing it by 1.
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Render method returns JSX using the typed state property.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Attach the increment handler to the button click event */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;