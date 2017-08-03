import {Component, NgModule, VERSION} from '@angular/core'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-scene-2',
  templateUrl: 'src/a-scene.photo.comp.html', 
  styleUrls:['src/styles.css']
})
export class aScenePhoto {
    @Input() selector: number;
    photoAsset:string;
  constructor() {
    //SET INITIAL VARIABLES IN THE SELECT FORMS
    this.photoAsset=0;
    
  }
}
  