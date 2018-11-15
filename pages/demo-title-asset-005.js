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
          breadcrumbs={["Pending Sale", StockNumber]} 
          pageHeader="Pending Sale: "
          pageSubHeader={ "Asset " + StockNumber + " Pending Sale"}
          >

           <Modal 
            show={this.state.showFormModal} 
            onHide={this.closeFormModal} 
            container={this} >
            <Modal.Header>
              <Modal.Title>Confirmed Sent...</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              You have confirmed this titled asset delivered!
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.closeFormModal}>Close</Button>
              <Button
                onClick={()=>{Router.push({pathname: '/demo-title-asset-001', query: this.props.url.query})}}
                bsStyle="primary">Complete</Button>
            </Modal.Footer>
          </Modal>
          <div>
            <h1 className="text-center">Almost there</h1>
            <table className="borsetta-checklist">
              <tr>
                <td>
                  <i class="fas fa-check-circle"></i>
                </td>
                <td>
                  <h3>CONTRACT SIGNED</h3>
                  <p>Wholesale Agreement</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-check-circle"></i>
                </td>
                <td>
                  <h3>PAYMENT AUTHORIZED</h3>
                  <p>$30,000 TO LUCENT DIAMONDS</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-check-circle"></i>
                </td>
                <td>
                  <h3>ESCROW TITLE ASSET BORSETTA</h3>
                  <p>Completed</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-check-circle"></i>
                </td>
                <td>
                  <h3>CONTRACT SIGNED</h3>
                  <p>Wholesale Agreement</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="far fa-circle"></i>
                </td>
                <td>
                  <h3>SENT TO REEED DESIGNS</h3>
                  <p>Not Completed</p>
                </td>
              </tr>
            </table>
      
            <div className="text-center">

            <button className="borsetta-button" 
              onClick={this.openFormModal}>
              FINISH
              </button>
            </div>
              <Footer />

          </div>
        </RightPanel>        
      </div>
    );
  };
}

export default App;
