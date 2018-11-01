import BorsettaLogoSvg from '../components/BorsettaLogoSvg';
import BaseHeader from '../components/BaseHeader';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Router from 'next/router';
import { Component } from 'react';

class LoginInputView extends Component {
  state = {
    username: '',
    password: ''
  };

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (e) {
    console.log("CHANGED: " , e.target.value); 
    let change = { [e.target.name] : e.target.value };
    this.setState (change);
  }

  render () {
    return (
      <div class="borsetta-page-container login" >
        <BaseHeader />
        <div>
            <BorsettaLogoSvg />
            <h3 className="text-center borsetta-subheader">Personalized Asset Title + <br/> Blockchain Tracking Services</h3>
            <div className="text-center">
                
                <input className='borsetta-input' type="text" placeholder="Username" name='username' value={this.state.username} onChange={this.handleChange} />
                <input className='borsetta-input' type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                <Button label="Login" onClick={()=>{Router.push('/')}} />
                <Button label="Cancel" modifiers="secondary" onClick={()=>{Router.push('/login')}} />
            </div>
        </div>
        <Footer />
      
      </div>
    )
  }
}

export default LoginInputView;