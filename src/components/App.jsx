import React from 'react';
import Header from './Header';
import IcecreamCarousel from './IcecreamCarousel';
import CarouselButton from './CarouselButton';

const data = require('../../data.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.returnFlavor = this.returnFlavor.bind(this);
  }
  componentDidMount() {
    this.setState({
      style: {
        backgroundColor: `${data.flavors[0].primaryColor}`,
        border: `5px solid ${data.flavors[0].secondaryColor}`,
      },
      flavor: data.flavors[0],
    });
  }
  returnFlavor(flavor) {
    this.setState({
      style: {
        backgroundColor: flavor.primaryColor,
        border: `5px solid ${flavor.secondaryColor}`,
      },
      flavor,
    });
  }
  render() {
    return (
      <div className="app-container" style={this.state.style} >
        <Header flavor={this.state.flavor || {}} />
        <IcecreamCarousel returnFlavor={this.returnFlavor} />
        {/* <CarouselButton /> */}
      </div>
    )
  }
}

export default App;
