import React from 'react';

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleHover = this.toggleHover.bind(this);
  }
  componentDidMount() {
    this.setState({
      style: { backgroundColor: '' }
    });
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
    );
  }
};

export default HeaderButton;
