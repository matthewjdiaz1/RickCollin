import React from 'react';
import Header from './Header';
import IceacreamCarousel from './IcecreamCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Header />
        <IceacreamCarousel />
      </div>
    )
  }
}

export default App;
