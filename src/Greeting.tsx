import React from 'react';

// Define props type
interface GreetingProps {
  name: string;
}

// Functional component using props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;