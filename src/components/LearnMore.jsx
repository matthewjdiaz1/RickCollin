import React from 'react';

class LearnMore extends React.Component {
  render() {
    return (
      <div className="icecream-learn-more" style={{ backgroundColor: this.props.hoverColor }}>
        Learn More
      </div>
    );
  }
};

export default LearnMore;
