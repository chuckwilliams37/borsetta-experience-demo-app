import LoginLandingForm from '../components/LoginLandingForm';
import BaseHeader from '../components/BaseHeader';
import Footer from '../components/Footer';


import { Component } from 'react';

class LoginLandingView extends Component {
  render () {
    return (
      <div className="borsetta-page-container login" >
        <BaseHeader />
        <LoginLandingForm />
        <Footer />
      
      </div>
    )
  }
}

export default LoginLandingView;