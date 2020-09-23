import React from 'react';
import HeaderButton from './HeaderButton.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-container-left">
          <HeaderButton text={'home'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Product'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Shops'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'About Us'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Locator'} hoverColor={this.props.secondaryColor} />
          <HeaderButton text={'Recipes'} hoverColor={this.props.secondaryColor} />
        </div>
        <div
          className="header-container-right"
          title='Amazon.com'
          onClick={() => location.href = 'https://www.amazon.com/Ice-Cream/b?ie=UTF8&node=6459179011'}>
          <div
            style={{ color: this.props.secondaryColor }}
            className="header-shopnow-button">Shop Now</div>
        </div>
      </div>
    )
  }
};

export default Header;
