import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

class Sky extends React.Component{
  render(){
    return(
    <Entity geometry={{primitive: 'sphere', radius: 5}} material={{src: 'https://cdn.glitch.com/af3f12d2-c9e1-4a3b-98e0-d295d05745e5%2FWildStrawberry2-2400px.png?1501807530203',side: 'back',repeat:'2 2'}}/>
    )
  }
}
export default Sky;