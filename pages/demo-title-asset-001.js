import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';
import ReactTable from 'react-table';
import mocker from 'mocker-data-generator';
import diamondSchema from '../components/DiamondAssetSchema';
import Router from 'next/router';


class App extends Component {
  constructor () {
    console.clear();
    super();
    this.state = {
      assetsInventory : {},
      columnsConfig: {},
      diamondSchema: diamondSchema,
      pageSubheadMessage : "Select asset to edit/add title.",
      selectedIndex: null,
      selectedItemData: {}
    }
    this.getAssetInventory = this.getAssetInventory.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
    this.onAddEditTitleButtonClick = this.onAddEditTitleButtonClick.bind(this);
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

  onAddEditTitleButtonClick () {
    Router.push({
      pathname: '/demo-title-asset-002',
      query: this.state.selectedItemData
    });
  }

  onCellClick (state, rowInfo, column, instance) {
    return {
      onClick: (e, handleOriginal) => {
        console.log("A Td Element was clicked!");
        console.log("it produced this event:", e);
        console.log("It was in this column:", column);
        console.log("It was in this row:", rowInfo);
        console.log("It was in this table instance:", instance);

        // IMPORTANT! React-Table uses onClick internally to trigger
        // events like expanding SubComponents and pivots.
        // By default a custom 'onClick' handler will override this functionality.
        // If you want to fire the original onClick handler, call the
        // 'handleOriginal' function.
        if (handleOriginal) {
          handleOriginal();
        }

        this.setState({
          selectedIndex: rowInfo.index,
          pageSubheadMessage : "Select an action to perform with asset id: " + rowInfo.original.StockNumber,
          selectedItemData: rowInfo.original
        });



        // Router.push({
        //   pathname: '/demo-title-asset-002',
        //   query: { name: 'Zeit' }
        // });
      },
      style: {
        background: rowInfo.index === this.state.selectedIndex ? 'rgba(6, 228, 228, 1)' : 'rgba(67, 97, 97, 0.65)',
        color: rowInfo.index === this.state.selectedIndex ? 'rgba(2, 29, 29, 0.75)' : 'rgba(255, 255, 255,1)'
      }
    }
  }


  render() {
    const data = this.state.assetsInventory.diamonds;
  
    const columns = [
      {
        Header: 'Titled Status',
        accessor: 'isTitled',
        Cell: (props)=>{ return (props.original.isTitled ? <i className="fas fa-shield-alt"></i> : null) },
        maxWidth: 85
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
        <RightPanel 
          title={<div><i className="menu-icon far fa-gem"></i>&nbsp;Titling &amp; Tracking</div>} 
          breadcrumbs={["Title Assets"]} 
          pageHeader="Title Assets"
          pageSubHeader={this.state.pageSubheadMessage}
          
          >

          <div className="action-bar-container">
            <button onClick={this.onAddEditTitleButtonClick} className="borsetta-button" disabled={this.state.selectedIndex === null}>{this.state.selectedItemData.isTitled ? 'Edit' : 'Add'} Title <i className="fas fa-file-alt"></i></button>
            <button className="borsetta-button" disabled={this.state.selectedIndex === null}>Transact <i className="fas fa-file-invoice-dollar"></i></button>
            <button className="borsetta-button" disabled={this.state.selectedIndex === null}>Transfer<i className="fas fa-icon-chevron-right"></i> </button>
            <button className="borsetta-button" disabled={this.state.selectedIndex === null}>Consign<i className="fas fa-icon-paper-clip"></i> </button>
          </div>

          <ReactTable 
            className="-striped -highlight" 
            data={data} 
            columns={columns}
            getTdProps={this.onCellClick}
            />
          <Footer />
        </RightPanel>        
      </div>
    );
  };
}

export default App;
