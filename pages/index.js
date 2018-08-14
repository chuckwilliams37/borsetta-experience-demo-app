import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import axios from 'axios';

class App extends Component {
  // static async getInitialProps() {
  static async getInitialProps () {
    let response = await axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{headers: {"X-Mashape-Key": "LRcy7D5BaKmshRtPkQnayek43bG0p1BTtkbjsnRYdBCif1iHEp"}});
    return { cards: response.data }
  };

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
