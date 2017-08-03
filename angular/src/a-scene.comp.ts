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
  recording:bool;
  simpleLight: bool;
  selectedBulb:bool;
  selectedRec:bool;
  
  HEX: string;
  
  constructor() {
    //SET INITIAL VARIABLES IN THE SELECT FORMS
    this.simpleAsset=0;
    this.preview=0;
    this.photoAsset=0;
    this.R=255;
    this.simpleLight = false;
    this.selectedBulb = false;
    this.selectedRec = false;
    this.recording = false;
  }
  record():void{
    if(!this.selectedRec){
      console.log("recordCheck");
      this.startDictation();
      this.selectedRec = true;
    }
  }
   startDictation():void {
    console.log("start dictaction");
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      console.log("start");
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();
      console.log("start");
      recognition.onresult = (e)=>{
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        if(e.results[0][0].transcript=="lights on"){
          this.simpleLight = true; 
        }
        if(e.results[0][0].transcript=="lights off"){
          this.simpleLight = false; 
        }
        if(e.results[0][0].transcript=="cube"){
          this.simpleAsset = 1; 
        } 
      };
      recognition.onaudioend=(e)=>{
        this.selectedRec=false;

      }
      recognition.onerror = function(e) {
        recognition.stop();

      }
    }
   }
  toggleSimpleLight() : void{
    this.simpleLight=!this.simpleLight;
  }
  makeHex() : void{
    this.HEX = "#" + ((1 << 24) + (200 << 16) + (255 << 8) + 0).toString(16).slice(1);
  }
  }