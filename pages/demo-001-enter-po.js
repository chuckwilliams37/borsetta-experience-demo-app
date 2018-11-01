import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import axios from 'axios';

class App extends Component {

  render() {
    return  (
      <div>
        <LeftPanel />
        <RightPanel />
      </div>
    );
  };
}

export default App;
