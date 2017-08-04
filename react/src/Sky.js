import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

class Sky extends React.Component{
  render(){
    return(
    <Entity geometry={{primitive: 'sphere', radius: 5}} material={{src: 'https://cdn.glitch.com/799d4a0b-ee0f-4b75-9369-15fb8b5f13ef%2FWildStrawberry2-2400px.png?1501800118628',side: 'back',repeat:'2 2'}}/>
    )
  }
}
export default Sky;