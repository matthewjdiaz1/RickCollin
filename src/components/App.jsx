import React from 'react';
import Header from './Header';
import IcecreamCarousel from './IcecreamCarousel';

const data = require('../../data.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLearnMoreClicked: false,
    };
    this.returnFlavor = this.returnFlavor.bind(this);
    this.toggleLearnMoreModal = this.toggleLearnMoreModal.bind(this);
  }
  componentDidMount() {
    this.setState({
      appStyle: {
        backgroundColor: `${data.flavors[0].primaryColor}`,
        border: `5px solid ${data.flavors[0].secondaryColor}`,
      },
      modalStyle: {
        backgroundColor: `white`,
        border: `5px solid ${data.flavors[0].primaryColor}`,
      },
      flavor: data.flavors[0],
      textColor: '',
    });
  }
  returnFlavor(flavor) {
    this.setState({
      appStyle: {
        backgroundColor: flavor.primaryColor,
        border: `5px solid ${flavor.secondaryColor}`,
      },
      flavor,
      textColor: flavor.primaryColor,
    });
  }
  toggleLearnMoreModal() {
    console.log(this.state);
    this.setState({
      isLearnMoreClicked: !this.state.isLearnMoreClicked,
    });
  }
  render() {
    // console.log(this.state);
    const { flavor } = this.state;
    // return (
    // flavor && <div>failed to load flavor...</div>
    if (!this.state.flavor) {
      return (
        <div>loading</div>
        // <div className="app-container" style={this.state.appStyle} >
        //   <Header
        //     textColor={null}
        //     primaryColor={this.state.flavor.primaryColor}
        //     secondaryColor={this.state.flavor.secondaryColor}
        //   />
        //   <IcecreamCarousel
        //     returnFlavor={this.returnFlavor}
        //     toggleLearnMoreModal={this.toggleLearnMoreModal}
        //     flavor={data.flavors}
        //   />
        // </div>
      )
    } else {
      return (
        // <div className="modal-container" style={this.state.modalStyle} onClick={() => this.toggleLearnMoreModal()}>
        //   <Header
        //     textColor={this.state.textColor}
        //     primaryColor={this.state.flavor.secondaryColor}
        //     secondaryColor={this.state.flavor.secondaryColor}
        //   />
        //   <Header
        //     textColor={this.state.textColor}
        //     primaryColor={this.state.flavor.secondaryColor}
        //     secondaryColor={this.state.flavor.secondaryColor}
        //   />
        // </div>
        <div className="app-container" style={this.state.appStyle} >
          <Header
            textColor={'white'}
            primaryColor={this.state.flavor.primaryColor}
            secondaryColor={this.state.flavor.secondaryColor}
          />
          <IcecreamCarousel
            returnFlavor={this.returnFlavor}
            toggleLearnMoreModal={this.toggleLearnMoreModal}
            flavor={data.flavors}
          />
        </div>
      )
    }
    // );
  }
}

export default App;
