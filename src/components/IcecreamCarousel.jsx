import React from 'react';
import IcecreamInfo from './IcecreamInfo.jsx';
import IcecreamImage from './IcecreamImage.jsx';

const data = require('../../data.js');

class IcecreamCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: null,
      flavorIndex: 0,
      maxFlavorIndex: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let maxFlavorIndex = -1;
    data.flavors.forEach(flavor => { maxFlavorIndex++; });
    let flavor = data.flavors[0];
    // return colors returnColorTheme
    this.props.returnFlavor(flavor);
    this.setState({ flavor, maxFlavorIndex });
  }
  handleClick(isDirectionRight) {
    if (isDirectionRight) {
      // TODO - catch out of bounds index
      if (this.state.flavorIndex + 1 > this.state.maxFlavorIndex) return;
      this.setState({
        flavorIndex: this.state.flavorIndex + 1,
        flavor: data.flavors[this.state.flavorIndex + 1]
      }, () => this.props.returnFlavor(this.state.flavor));
    } else {
      if (this.state.flavorIndex - 1 < 0) return;
      this.setState({
        flavorIndex: this.state.flavorIndex - 1,
        flavor: data.flavors[this.state.flavorIndex - 1]
      }, () => this.props.returnFlavor(this.state.flavor));
    }
  }
  render() {
    if (this.state.flavor) {
      return (
        <div>
          <div className="icecream-left-arrow" onClick={() => this.handleClick(false)}>
            <svg viewBox="0 0 30 30"><path d="M17,3h2c0.386,0,0.738,0.223,0.904,0.572s0.115,0.762-0.13,1.062L11.292,15l8.482,10.367 c0.245,0.299,0.295,0.712,0.13,1.062S19.386,27,19,27h-2c-0.3,0-0.584-0.135-0.774-0.367l-9-11c-0.301-0.369-0.301-0.898,0-1.267 l9-11C16.416,3.135,16.7,3,17,3z"></path></svg>
          </div>
          <div className="icecream-right-arrow" onClick={() => this.handleClick(true)}>
            <svg viewBox="0 0 30 30"><path d="M12,27h-2c-0.386,0-0.738-0.223-0.904-0.572s-0.115-0.762,0.13-1.062L17.708,15L9.226,4.633 c-0.245-0.299-0.295-0.712-0.13-1.062S9.614,3,10,3h2c0.3,0,0.584,0.135,0.774,0.367l9,11c0.301,0.369,0.301,0.898,0,1.267l-9,11 C12.584,26.865,12.3,27,12,27z"></path></svg>
          </div>
          <div className="IcecreamCarousel">
            <IcecreamInfo
              flavor={this.state.flavor}
            />
          </div>
          <div onClick={() => console.log(this.state)}>
            <IcecreamImage
              flavor={this.state.flavor}
            />
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default IcecreamCarousel;
