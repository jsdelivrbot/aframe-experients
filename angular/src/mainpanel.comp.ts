import {Component, NgModule, VERSION} from '@angular/core'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-scene-3',
  template: `
 
<h1>Angula.io and A-frame:</h1>
<hr>
<h2>What is aframe ?</h2>
<p> Mostly aframe is: </p>
<ul>
<li><a target="_blank" href="https://en.wiktionary.org/wiki/amazed">Amazing</a></li>
<li><a target="_blank" href="http://www.dictionary.com/browse/awesome">Awesome</a></li>
<li><a target="_blank" href="http://www.urbandictionary.com/define.php?term=jaw-dropper
">Jawdropping</a></li>
</ul>

<p><a href="https://aframe.io/">Aframe</a> is a great library build on <a href="https://threejs.org/">three.js</a>
designed to allow easy creating virtual reality apps and websites.</p>
<hr>
<h2>But..why ? </h2>
<p>Aframe based sites are supported by most browsers supporting html5 
(only found issues with html video tags on the apple systems),
yet the virtual reality can be experienced on: </p> 
<ul>
<li> STEAM's DESKTOP VR:
<ul>
<li>HTC VIVE</li>
<li>OCULUS RIFT</li>
</ul>
</li>
<li> Modern Smartphones with a cardboard or GEAR-like equipment</li>
</ul>
  
  `, styleUrls:['src/styles.css']
})
export class mainPanel {
   
  }