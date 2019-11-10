import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-logo">Logo</div>
          <div className="header-button">Product</div>
          <div className="header-button">Shops</div>
          <div className="header-button">About Us</div>
          <div className="header-button">Locator</div>
          <div className="header-button">Recipes</div>
        </div>
        <div className="header-container-right">
          <div className="header-button-shopnow">Shop Now
        </div>
        </div>
      </div>
    )
  }
}

export default Header;
