import React from 'react';

class LearnMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: '' },
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleHover() {
    this.state.style.backgroundColor === '' ? this.setState({ style: { backgroundColor: this.props.hoverColor } }) : this.setState({ style: { backgroundColor: '' } });
  }
  handleClick() {
    this.props.toggleLearnMoreModal();
  }
  render() {
    return (
      <button className="icecream-learn-more"
        onClick={() => this.handleClick()}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={this.state.style}>
        Learn More
      </button>
    )
  }
}

export default LearnMore;
