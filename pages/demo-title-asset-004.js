import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';
import Router from 'next/router';
import {Modal, Button, FieldGroup, Checkbox, Radio, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class App extends Component {
  constructor () {
    // console.clear();
    super();
    this.state = {
      showFormModal: false
    }

    this.openFormModal = this.openFormModal.bind(this);
    this.closeFormModal = this.closeFormModal.bind(this);
  }

  componentWillMount() {
    // console.log("Router.query: ", Router.query);
    console.log("props: ", this.props);
  }

  openFormModal () {
    this.setState({
      showFormModal: true
    });
  }

  
  closeFormModal () {
    console.log("closeFormModal()");
    this.setState({
      showFormModal: false,
      
    });
  }

  render() {

    const { StockNumber, isTitled } = this.props.url.query;

    return  (
      <div className="modal-container">
        <LeftPanel />
        <RightPanel 
          title={<div><i className="menu-icon far fa-gem"></i>&nbsp;Asset Title Transfer Funds</div>} 
          breadcrumbs={[""]} 
          pageHeader="Asset Title Transfer Funds"
          pageSubHeader=""
          >
          <div className="action-bar-container">
            <button 
              className="borsetta-button"
              onClick={()=>{ Router.push({pathname:"/demo-title-asset-005", query: this.props.url.query})}}
              > 
                Approve Contract for Sale: {StockNumber} <i className="fas fa-file-invoice-dollar"></i>
            </button>
            <button className="borsetta-button secondary" 
              onClick={()=>Router.push({
                pathname: '/demo-title-asset-001'
              })}>
            <i className="fas fa-chevron-left"></i> Back to Selection </button>
          </div>

   

          <div className="asset-detail-page-container">
            <div className="asset-detail-grid-cell clickable" data-toggle="collapse" data-target="#assetData">
              <header className="collapsible-header show" >
                Wholesale Agreement
                </header>
                <section>
                  <div id="assetData" class="collapse show">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            View Documents: 
                          </td>
                          <td>
                          <i className="fas fa-file-invoice"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Download Documents
                          </td>
                          <td>
                            <i className="fas fa-cloud-download-alt"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>
          
            <div  className="asset-detail-grid-cell">
              <section>
                <img src="/static/images/dark_diamond_treated.png" />
                <p className="item-label">ITEM: Cultivated Fancy Red Lab Diamond</p>
                <p className="item-id">Title: DID 394u93u59ute9rtjritr</p>
              </section>
            </div>


             <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#assetMarketlData">
              <header className="collapsible-header" >
                Asset Market Data Valuation
                </header>
                <section>
                  <div id="assetMarketlData" class="collapse show">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                          Market Price: 
                          </td>
                          <td>
                          $45,000
                          </td>
                        </tr>
                        <tr>
                          <td>
                          %Off RAP -70.0 Price/Ct
                          </td>
                          <td>
                          $44,400
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Wholesale Price 
                          </td>
                          <td>
                            $30,000 (PT)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Retail Price 
                          </td>
                          <td>
                            $45,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>

            <div className="asset-detail-grid-cell">
              <section>
                <img src="/static/images/borsetta-signature.png" />
                <p className="item-label">Transfer title: Authorized Signature</p>
                <p className="item-id">Borsetta Secured</p>
                <p classNAme="item-id"> {Date("2018-10-04-1503").toString()}</p>
              </section>
            </div>

          </div>
          <Footer />
        </RightPanel>        
      </div>
    );
  };
}

export default App;
