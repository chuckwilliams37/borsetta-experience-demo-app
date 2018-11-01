import { Component } from 'react';
import BorsettaLogoSvg from './BorsettaLogoSvg';
import Button from './Button';
import Router from 'next/router';

class LoginLandingForm extends Component {

    handleClick () {
        Router.push('/login-001');
    }

    render () {

    return (
        <div>
            <BorsettaLogoSvg />
            <h3 className="text-center borsetta-subheader">Personalized Asset Title + <br/> Blockchain Tracking Services</h3>
            <div className="text-center">
                
                <Button label="Login" onClick={this.handleClick}></Button>
                <Button label="Register" modifiers="secondary"  />
                
            </div>
        </div>
        )
    }


}

  export default LoginLandingForm;