import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
          <h1>PRÓXIMAMENTE MÁS INFORMACIÓN <br/>DEMNÄCHST MEHR INFOS</h1>
          <img className="under-construction-img" src="https://res.cloudinary.com/ignlopezsanchez/image/upload/v1545667522/josemiAndGesche.jpg" alt="boda-josemi-gesche"/>
      </div>
    );
  }
}

export default Home;
