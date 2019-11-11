import React from 'react';
import HeaderButton from './HeaderButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: null,
    }
    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {

  }
  toggleHover() {

  }
  render() {
    return (
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-logo">Logo</div>
          <HeaderButton text={'Product'} hoverColor={this.props.flavor.secondaryColor} />
          <HeaderButton text={'Shops'} hoverColor={this.props.flavor.secondaryColor} />
          <HeaderButton text={'About Us'} hoverColor={this.props.flavor.secondaryColor} />
          <HeaderButton text={'Locator'} hoverColor={this.props.flavor.secondaryColor} />
          <HeaderButton text={'Recipes'} hoverColor={this.props.flavor.secondaryColor} />
        </div>
        <div className="header-container-right">
          <div className="header-shopnow-button">Shop Now
        </div>
        </div>
      </div>
    )
  }
}

export default Header;
