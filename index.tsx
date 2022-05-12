import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Im a State',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>My first project working with Typescript on React</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
