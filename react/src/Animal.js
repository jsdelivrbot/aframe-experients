import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

class Animal extends React.Component{
  constructor(props) {
    super(props);
    this.position = props.pos;
    this.rotation = props.rot;
    switch (props.src){
      case "deer":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FLow-Poly-Chromatic-Leaping-Deer-Silhouette-2400px.png?1501804062663";
        break;
      case "unicorn":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FChromatic-Triangular-Unicorn-Silhouette-2400px.png?1501804112867";
        break;
      case "fatcat":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FLow-Poly-Prismatic-Fluffy-Cat-2-Silhouette-2400px.png?1501804580069";
        break;
      case "cat":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FPrismatic-Low-Poly-Kitten-Playing-With-Butterflies-2400px.png?1501804598489";
        break;
      case "elephant":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FVivid-Chromatic-Elephant-Silhouette-2400px.png?1501804615460";
        break;
      case "peacock":
        this.source = "https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FChromatic-Peacock-7-No-Background-2400px.png?1501804627147";
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
