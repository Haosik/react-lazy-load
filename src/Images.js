import React, { Component } from 'react';

class Images extends Component {
  state = {
    1: Math.floor(Math.random() * 1000 + 1),
    2: Math.floor(Math.random() * 1000 + 1),
    3: Math.floor(Math.random() * 1000 + 1),
    4: Math.floor(Math.random() * 1000 + 1),
    5: Math.floor(Math.random() * 1000 + 1),
    6: Math.floor(Math.random() * 1000 + 1),
    7: Math.floor(Math.random() * 1000 + 1),
    8: Math.floor(Math.random() * 1000 + 1),
    9: Math.floor(Math.random() * 1000 + 1),
    10: Math.floor(Math.random() * 1000 + 1)
  };
  renderImages = () =>
    Object.keys(this.state).map(item => (
      <img key={this.state[item]} src={`https://picsum.photos/id/${this.state[item]}/300/300`} alt="" />
    ));
  render() {
    return this.renderImages();
  }
}

export default Images;
