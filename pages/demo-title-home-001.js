import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';
import ReactTable from 'react-table';
import mocker from 'mocker-data-generator';
import diamondSchema from '../components/DiamondAssetSchema';


class App extends Component {
  constructor () {
    console.clear();
    super();
    this.state = {
      assetsInventory : {},
      columnsConfig: {},
      diamondSchema: diamondSchema
    }
    this.getAssetInventory = this.getAssetInventory.bind(this);
  }

  getAssetInventory (schema) {
    let sampleInventory = {};
    const sampleInventoryCall = mocker()
      .schema('diamonds', diamondSchema, {max: 1000})
      .build( (error, data) => {
        if (error) {
            throw error
        }
        sampleInventory = data;
        console.log('getAssetInventory(): ' , sampleInventory.diamonds[0]);
      });
      
    return sampleInventory;
  }

  componentWillMount() {
    this.setState({assetsInventory: this.getAssetInventory(this.state.diamondSchema)});
  }


  render() {
    const data = this.state.assetsInventory.diamonds;
  
    const columns = [
      {
        Header: 'Titled',
        accessor: 'isTitled',
        Cell: (props)=>{ return (props.original.isTitled ? <i class="fas fa-shield-alt"></i> : null) },
        maxWidth: 64
      },
      {
        Header: 'Stock No.',
        accessor: 'StockNumber'
      },
      {
        Header: 'Shape',
        accessor: 'Shape'
      },
      {
        Header: 'Carat',
        accessor: 'Carat'
      }
    ];
    // const columns = [{
    //   Header: 'Name',
    //   accessor: 'name' // String-based value accessors!
    // }, {
    //   Header: 'Age',
    //   accessor: 'age',
    //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: d => d.friend.name // Custom value accessors!
    // }, {
    //   Header: props => <span>Friend Age</span>, // Custom header components!
    //   accessor: 'friend.age'
    // }];


    return  (
      <div>
        <LeftPanel />
        <RightPanel title={<div><i className="menu-icon far fa-gem"></i>&nbsp;Titling &amp; Tracking</div>} breadcrumbs={["Titling Home"]}>
          <ReactTable className="-striped -highlight" data={data} columns={columns}/>
          <Footer />
        </RightPanel>        
      </div>
    );
  };
}

export default App;
