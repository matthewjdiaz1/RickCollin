import React from 'react';
import LearnMore from './LearnMore.jsx';

class IceacreamInfo extends React.Component {
  render() {
    return (
      <div className="icecream-info-container">
        <div className="icecream-name">
          {this.props.flavor.name}
        </div>
        <div className="icecream-dash">__</div>
        <div className="icecream-info">
          {this.props.flavor.info}
        </div>
        <div className="icecream-learn-more">LearnMore</div>
      </div>
    )
  }
}

export default IceacreamInfo;
