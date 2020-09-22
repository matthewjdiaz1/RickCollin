import React from 'react';
import HeaderButton from './HeaderButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          {/* <div className="header-logo">home</div> */}
          <HeaderButton text={'home'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Product'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Shops'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'About Us'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Locator'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Recipes'} hoverColor={this.props.secondaryColor} />
        </div>
        <div className="header-container-right">
          <div style={{ color: this.props.secondaryColor }} className="header-shopnow-button">Shop Now</div>
        </div>
      </div>
    )
  }
};

export default Header;
