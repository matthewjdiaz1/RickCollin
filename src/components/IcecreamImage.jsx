import React from 'react';
// import image from '../../public/assets/RickIceCream.jpeg'

class IcecreamImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  render() {
    return (
      <div>
        <div className="icecream-image-div">
          <img className="icecream-image-image" src={this.props.flavor.url} alt="Rick Icecream" />
        </div>
        <svg className="icecream-image-circle" viewBox="0 0 100 100">
          <circle style={{ fill: this.props.flavor.secondaryColor }} cx="50" cy="50" r="50" />
        </svg>
      </div>
    )
  }
}

export default IcecreamImage;
