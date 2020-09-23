import React from 'react';
import raspberry from '../../public/assets/images/Raspberry.png';
import chocolate from '../../public/assets/images/Chocolate.png';
import yellow from '../../public/assets/images/yellow.png';

class IcecreamImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // if (this.props.flavor.name === 'Raspberry Sorbet') {
    //   this.setState({ image: raspberry });
    // } else if (this.props.flavor.name === `Mocha Chocolate Cookie`) {
    //   this.setState({ image: chocolate });
    // } else {
    //   this.setState({ image: yellow });
    // }
  }
  render() {
    return (
      <div>
        <div className="icecream-image-div">
          <img className="icecream-image-image" src={this.props.flavor.name === 'Raspberry Sorbet' ? raspberry : this.props.flavor.name === 'Mocha Chocolate Cookie' ? chocolate : yellow} alt="iceCreamCone" />
        </div>
        <svg className="icecream-image-circle" viewBox="0 0 100 100">
          <circle style={{ fill: this.props.flavor.secondaryColor }} cx="50" cy="50" r="50" />
        </svg>
      </div>
    )
  }
}

export default IcecreamImage;
