import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import Animal from './Animal'
import Sky from './Sky'

class App extends Component {
  render() {
    return (
      <Scene>
      <Entity position={{x: 0.75, y: 1.6, z: -1}} scale={{x:3,y:3,z:3}} text={{value: 'Using a-frame with react.js                                           is easy as riding a bicycle!', color: 'white'}}/>
      <Sky />
      <Animal pos="-3.2 1.4 -3" rot="0 30 0" src="deer"/>
      <Animal pos="3.5 2.3 -1.75" rot="0 -65 0" src="unicorn"/>
      <Animal pos="4 -0.5 2" rot="0 -130 0" src="fatcat"/>
      <Animal pos="-3.8 -1.73 1.78" rot="-45 120 0" src="cat"/>
      <Animal pos="-1.16 2.3 4" rot="30 168 0" src="elephant"/>
      <Animal pos="0 -1.85 -4.35" rot="-20 0 0" src="peacock"/>
      </Scene>
    );
  }
}
export default App;
