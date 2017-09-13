import {Component, NgModule, VERSION} from '@angular/core'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-scene-1',
  templateUrl: 'src/a-scene.comp.html', 
  styleUrls:['src/styles.css']
})
export class aScene {
    @Input() selector: number;
    @Input() light: bool;
//DECLARE VARIABLES FOR THE SELECT FORMS
  simpleAsset:string;
  preview:string;
  photoAsset:string;
  R:number;
  simpleLight: bool;
  selectedBulb:bool;
  
  HEX: string;
  
  constructor() {
    //SET INITIAL VARIABLES IN THE SELECT FORMS
    this.simpleAsset=0;
    this.preview=0;
    this.photoAsset=0;
    this.R=255;
    this.simpleLight = false;
    this.selectedBulb = false;
  }
  
  toggleSimpleLight() : void{
    this.simpleLight=!this.simpleLight;
  }
  makeHex() : void{
    this.HEX = "#" + ((1 << 24) + (200 << 16) + (255 << 8) + 0).toString(16).slice(1);
  }
  }