import React from 'react';
import IcecreamInfo from './IcecreamInfo.jsx';
import IcecreamImage from './IcecreamImage.jsx';

const data = require('../../data.js');

class IcecreamCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFlavor: null,
    }

  }
  componentDidMount() {
    let currentFlavor = data.flavors[0];
    this.setState({ currentFlavor });

  }
  render() {
    if (this.state.currentFlavor) {
      return (
        <div className="IcecreamCarousel">
          <IcecreamInfo
            flavor={this.state.currentFlavor}
          />
          {/* <IcecreamImage /> */}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default IcecreamCarousel;
