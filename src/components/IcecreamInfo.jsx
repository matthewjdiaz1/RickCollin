import React from 'react';
import LearnMore from './LearnMore.jsx';

class IceacreamInfo extends React.Component {
  render() {
    return (
      <div className="icecream-info-container">
        <div className="icecream-name">
          {this.props.flavor.name}
        </div>
        <div className="icecream-dash">____</div>
        <div className="icecream-info">
          {this.props.flavor.info}
        </div>
        <LearnMore
          flavor={this.props.flavor}
        />
      </div>
    )
  }
}

export default IceacreamInfo;
