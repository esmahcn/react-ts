import React from 'react';

// Step 1: Define a TypeScript interface for the component props.
// This enforces that the component receives a 'name' prop of type string.
interface GreetingProps {
  name: string;
}

// Step 2: Use React.FC (FunctionComponent) generic type with the defined props interface.
// This provides type checking and autocomplete for props inside the component.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Use the typed 'name' prop safely in the JSX.
  return <div>Hello, {name}!</div>;
};

export default Greeting;