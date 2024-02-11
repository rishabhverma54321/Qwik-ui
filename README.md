# React UI Components

### Welcome to the React UI Components library! This library provides a set of reusable UI components for building modern web applications with React.

##### To install the React UI Components library in your project, you can use npm:

#### npm install @rishabhmandawariya/qwik-ui

```jsx
import React from 'react';
import { Slider } from '@rishabhmandawariya/qwik-ui'

const handleChange = (value) => {
console.log('Selected value:', value);
};

const data = ["Red","Green","Blue"]

const App = () => {
  return (
    <div>
      <Slider options={data} onChange={handleChange} className={className}/>
    </div>
  );
};

export default App;
```