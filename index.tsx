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
      name: 'Your name',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Very Simple Notepad</p>
        <form>
          <textarea rows="25" cols="50" name="description"></textarea>
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
