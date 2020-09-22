import React from 'react';
import HeaderButton from './HeaderButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // USE REACT HEADROOM - MADE BY KYLE
    // ALSO, USE GATSBY, static site generator
  }
  componentWillMount() {
    // this.setState({
    //   textColor: this.props.textColor,
    // });
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-logo">Logo..</div>
          <HeaderButton text={'Product'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Shops'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'About Us'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Locator'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Recipes'} hoverColor={this.props.secondaryColor} />
        </div>
        <div className="header-container-right">
          <div className="header-shopnow-button">Shop Now</div>
        </div>
      </div>
    )
  }
}

export default Header;
