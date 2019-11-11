import React from 'react';

class LearnMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearnMoreClicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isLearnMoreClicked: !this.state.isLearnMoreClicked });
  }
  render() {
    if (!this.state.isLearnMoreClicked) {
      return (
        <div className="icecream-learn-more" onClick={() => this.handleClick()}>
          Learn More
        </div>
      )
    } else {
      return (
        // TODO - modal
        <div className="icecream-learn-more" onClick={() => this.handleClick()}>
          TODO Modal
        </div>
      )
    }
  }
}

export default LearnMore;
