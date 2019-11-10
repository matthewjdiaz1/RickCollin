import React from 'react';
import IcecreamInfo from './IcecreamInfo.jsx';
import IcecreamImage from './IcecreamImage.jsx';

class IcecreamCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="IcecreamCarousel">
        <IcecreamInfo />
        <IcecreamImage />
      </div>
    )
  }
}

export default IcecreamCarousel;
