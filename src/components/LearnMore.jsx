import React from 'react';

class LearnMore extends React.Component {
  render() {
    console.log(this.props);
    return (
      <button className="icecream-learn-more" style={{ backgroundColor: this.props.hoverColor }}>
        Learn More
      </button>
    );
  }
};

export default LearnMore;
