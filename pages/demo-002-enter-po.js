import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanelPOEntry from '../components/RightPanelPOEntry';

class App extends Component {

  render() {
    return  (
      <div>
        <LeftPanel />
        <RightPanelPOEntry />
      </div>
    );
  };
}

export default App;
