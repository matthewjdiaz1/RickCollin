import React from 'react';

class LearnMore extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="icecream-learn-more" style={{ backgroundColor: this.props.hoverColor }}>
        Learn More
      </div>
    );
  }
};

export default LearnMore;
