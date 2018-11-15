import { Component } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';
import Router from 'next/router';
import {Modal, ProgressBar, Button} from 'react-bootstrap';


class App extends Component {
  constructor () {
    console.clear();
    super();
    this.closeGenerationModal = this.closeGenerationModal.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.closeGenerationModal = this.closeGenerationModal.bind(this);
    this.simulateTitleGenerationModal = this.simulateTitleGenerationModal.bind(this);
    this.state = {
      generationProgressCount: 0,
      showGenerationProgress: false, 
      progressInterval: null
    }
  }

  componentWillMount() {
    // console.log("Router.query: ", Router.query);
    console.log("props: ", this.props);
  }

  updateProgress (){

    console.log("updateProgress()");
    this.setState(
      {
        generationProgressCount: Math.min(this.state.generationProgressCount += Math.round(Math.random()*15+1), 100)
      }
    );

    if( this.state.generationProgressCount >=100){
     clearInterval(this.state.progressInterval);
    }
  }

  closeGenerationModal () {

    console.log("closeGenerationModal()");
    this.setState({
      showGenerationProgress: false,
      generationProgressCount: 0
    });
  }

  simulateTitleGenerationModal () {
    console.log("simulateTitleGenerationModal()");
    this.setState({
      showGenerationProgress: true,
      progressInterval :setInterval( this.updateProgress , 250)
    });
  }

  render() {

    const { StockNumber, isTitled } = this.props.url.query;

    return  (
      <div className="modal-container">
        <LeftPanel />
        <RightPanel 
          title={<div><i className="menu-icon far fa-gem"></i>&nbsp;Titling &amp; Tracking</div>} 
          breadcrumbs={["Title Assets",(isTitled ? "Edit Title" : "Create Title")]} 
          pageHeader={(isTitled ? "Edit " : "Create ") + "Title for Asset: " + (StockNumber ? StockNumber : '')}
          pageSubHeader={"Click to "+ (isTitled ? "update" : "generate") +" title for asset: " + StockNumber}
          >
          <Modal 
            show={this.state.showGenerationProgress} 
            onHide={this.closeGenerationModal} 
            container={this} >
            <Modal.Header>
              <Modal.Title>Generating title...</Modal.Title>
            </Modal.Header>

            <Modal.Body><ProgressBar now={this.state.generationProgressCount} label={`${this.state.generationProgressCount}%`} /></Modal.Body>

            <Modal.Footer>
              <Button onClick={this.closeGenerationModal}>Close</Button>
              <Button
                onClick={()=>{Router.push({pathname: '/demo-title-asset-003', query: this.props.url.query})}}
                bsStyle="primary">Continue</Button>
            </Modal.Footer>
          </Modal>

          <div className="action-bar-container">
            <button 
              className="borsetta-button"
              onClick={this.simulateTitleGenerationModal}
              >

                {(isTitled ? "Update" : "Generate")} Title For {StockNumber} <i className="fas fa-file-invoice-dollar"></i>
            </button>
            <button className="borsetta-button secondary" 
              onClick={()=>Router.push({
                pathname: '/demo-title-asset-001'
              })}>
            <i className="fas fa-chevron-left"></i> Back to Selection </button>
          </div>

   

          <div className="asset-detail-page-container">
            <div className="asset-detail-grid-cell clickable" data-toggle="collapse" data-target="#assetData">
              <header className="collapsible-header" >
                Asset Data 
                </header>
                <section>
                  <div id="assetData" class="collapse show">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            Origin: 
                          </td>
                          <td>
                            St. Petersburg Russia Producer/Grower:NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Unit ID # 
                          </td>
                          <td>
                            34439244wdx
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lot ID #
                          </td>
                          <td>
                            1225742
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Birth Date:
                          </td>
                          <td>
                            1/1/17
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Possession/Ownership:
                          </td>
                          <td>
                            Consignment Memo
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Asset :
                          </td>
                          <td>
                            Full set images of asset
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Brand Hallmark:
                          </td>
                          <td>
                            company brand trademark NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Item:
                          </td>
                          <td>
                            Cultivated Fancy Red Lab Diamond
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ethical Marks Score:
                          </td>
                          <td>
                          Ethics Mark Certified
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

            <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#assetDetailData">
              <header className="collapsible-header" >
                Asset Detail Data 
                </header>
                <section>
                  <div id="assetDetailData" class="collapse">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            Origin: 
                          </td>
                          <td>
                            St. Petersburg Russia Producer/Grower:NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Unit ID # 
                          </td>
                          <td>
                            34439244wdx
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lot ID #
                          </td>
                          <td>
                            1225742
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Birth Date :
                          </td>
                          <td>
                            1/1/17
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Possession/Ownership:
                          </td>
                          <td>
                            Consignment Memo
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Asset :
                          </td>
                          <td>
                            Full set images of asset
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Brand Hallmark:
                          </td>
                          <td>
                            company brand trademark NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Item:
                          </td>
                          <td>
                            Cultivated Fancy Red Lab Diamond
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ethical Marks Score:
                          </td>
                          <td>
                          Ethics Mark Certified
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>

            <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#assetAppraisalData">
              <header className="collapsible-header" >
                Asset Appraisal Data 
                </header>
                <section>
                  <div id="assetAppraisalData" class="collapse">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            Origin: 
                          </td>
                          <td>
                            St. Petersburg Russia Producer/Grower:NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Unit ID # 
                          </td>
                          <td>
                            34439244wdx
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lot ID #
                          </td>
                          <td>
                            1225742
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Birth Date :
                          </td>
                          <td>
                            1/1/17
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Possession/Ownership:
                          </td>
                          <td>
                            Consignment Memo
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Asset :
                          </td>
                          <td>
                            Full set images of asset
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Brand Hallmark:
                          </td>
                          <td>
                            company brand trademark NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Item:
                          </td>
                          <td>
                            Cultivated Fancy Red Lab Diamond
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ethical Marks Score:
                          </td>
                          <td>
                          Ethics Mark Certified
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>

             <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#assetMarketlData">
              <header className="collapsible-header" >
                Asset Market Data Valuation
                </header>
                <section>
                  <div id="assetMarketlData" class="collapse">
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

             <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#currentAssetHolder">
              <header className="collapsible-header" >
                Current Asset Holder
                </header>
                <section>
                  <div id="currentAssetHolder" class="collapse">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            Origin: 
                          </td>
                          <td>
                            St. Petersburg Russia Producer/Grower:NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Unit ID # 
                          </td>
                          <td>
                            34439244wdx
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lot ID #
                          </td>
                          <td>
                            1225742
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Birth Date :
                          </td>
                          <td>
                            1/1/17
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Possession/Ownership:
                          </td>
                          <td>
                            Consignment Memo
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Asset :
                          </td>
                          <td>
                            Full set images of asset
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Brand Hallmark:
                          </td>
                          <td>
                            company brand trademark NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Item:
                          </td>
                          <td>
                            Cultivated Fancy Red Lab Diamond
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ethical Marks Score:
                          </td>
                          <td>
                          Ethics Mark Certified
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
            </div>
            
            <div className="asset-detail-grid-cell collapsed clickable" data-toggle="collapse" data-target="#assetCertificationData">
              <header className="collapsible-header" >
                Asset Certification Data
                </header>
                <section>
                  <div id="assetCertificationData" class="collapse">
                    <table className="-striped -highlight">
                      <tbody>
                        <tr>
                          <td>
                            Origin: 
                          </td>
                          <td>
                            St. Petersburg Russia Producer/Grower:NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Unit ID # 
                          </td>
                          <td>
                            34439244wdx
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Lot ID #
                          </td>
                          <td>
                            1225742
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Birth Date :
                          </td>
                          <td>
                            1/1/17
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Possession/Ownership:
                          </td>
                          <td>
                            Consignment Memo
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Proof of Asset :
                          </td>
                          <td>
                            Full set images of asset
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Brand Hallmark:
                          </td>
                          <td>
                            company brand trademark NDT
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Item:
                          </td>
                          <td>
                            Cultivated Fancy Red Lab Diamond
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Ethical Marks Score:
                          </td>
                          <td>
                          Ethics Mark Certified
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
