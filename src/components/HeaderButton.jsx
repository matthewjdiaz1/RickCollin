import React from 'react';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {
    this.setState({
      style: {
        backgroundColor: '',
      }
    });
    // if (!this.props.textColor) {
    //   this.setState({
    //     style: {
    //       backgroundColor: this.props.primaryColor,
    //     },
    //   });
    // } else {
    //   this.setState({
    //     style: {
    //       backgroundColor: this.props.primaryColor,
    //       color: this.props.textColor,
    //     },
    //   });
    // }
  }
  toggleHover() {
    if (this.state.style.backgroundColor === '') {
      this.setState({
        style: {
          backgroundColor: this.props.hoverColor,
        },
      });
    } else {
      this.setState({
        style: {
          backgroundColor: '',
        },
      });
    }
    console.log(this.props.hoverColor);
  }
  render() {
    return (
      <div className="header-button"
        style={this.state.style}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.props.text}
      </div>
    )
  }
}

export default HeaderButton;
