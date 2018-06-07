import * as React from 'react';
import Todo from './components/Todo/Todo';

import './App.css';

const todoItems = [
  {
    checked: true,
    id: 1,
    name: 'Buy milk'
  },
  {
    checked: false,
    id: 2,
    name: 'Render TS'
  },
  {
    checked: false,
    id: 3,
    name: 'Drive home'
  }
];

class App extends React.Component {
  public render() {
    return <Todo items={ todoItems }/>;
  }
}

export default App;
