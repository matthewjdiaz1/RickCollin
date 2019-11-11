import React from 'react';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {

  }
  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }
  render() {
    if (this.state.hover) {
      return (
        <div className="header-button" style={{ backgroundColor: this.props.hoverColor }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          {this.props.text}
        </div>
      )
    } else {
      return (
        <div className="header-button" style={{ backgroundColor: '' }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          {this.props.text}
        </div>
      )
    }
  }
}

export default HeaderButton;
