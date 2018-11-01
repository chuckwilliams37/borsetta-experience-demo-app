import { Component } from 'react';

class Button extends Component {
  render () {
    return (
      <input 
        type="button" 
        className={'borsetta-button ' + (this.props.modifiers ? this.props.modifiers : '')} 
        value={this.props.label} 
        onClick={this.props.onClick ? this.props.onClick : ()=> {console.log('null')}}
        />
    )
  }
}

export default Button;

