import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

class Animal extends React.Component{
  constructor(props) {
    super(props);
    this.position = props.pos;
    this.rotation = props.rot;
    switch (props.src){
      case "deer":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FLow-Poly-Chromatic-Leaping-Deer-Silhouette-2400px.png?1501807525346";
        break;
      case "unicorn":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FChromatic-Triangular-Unicorn-Silhouette-2400px.png?1501807526520";
        break;
      case "fatcat":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FLow-Poly-Prismatic-Fluffy-Cat-2-Silhouette-2400px.png?1501807527592";
        break;
      case "cat":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FPrismatic-Low-Poly-Kitten-Playing-With-Butterflies-2400px.png?1501807529174";
        break;
      case "elephant":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FVivid-Chromatic-Elephant-Silhouette-2400px.png?1501807533587";
        break;
      case "peacock":
        this.source = "https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FChromatic-Peacock-7-No-Background-2400px.png?1501807532653";
        break;
    }
  }
  render(){
    return(
    <Entity position={this.position} rotation = {this.rotation} scale={{x:2,y:2,z:2}} geometry={{primitive: 'plane'}} material={{transparent:true, src: this.source}}/>
    )
  }
}
export default Animal;