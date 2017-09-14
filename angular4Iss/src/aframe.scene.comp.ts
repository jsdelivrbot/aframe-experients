import { NgModule,Component,Input, OnInit,OnChanges }  from '@angular/core';

@Component({
  selector: 'scene',
  template: `
  <a-scene embedded style="width:100%">
        <a-entity
          id="camera"
          camera="fov: 80; zoom: 1;"
          position="0 3 5"
          orbit-controls="
              autoRotate: false;
              target: #target;
              enableDamping: true;
              dampingFactor: 0.125;
              rotateSpeed:0.25;
              minDistance:3;
              maxDistance:100;
              "
          mouse-cursor="">
          <a-entity geometry="primitive:cone; radius-bottom:1; radius-top:0" scale=".33 1 .33" position="0 0 0" rotation="90 0 0" material="color: #0099ff; transparent: true; opacity:0.5"></a-entity>
      </a-entity>

    <a-entity id = "target" position="0 -1 -3" gltf-model-next="src: url(assets/Earth.gltf);">
        <a-entity id="rotator" rotation="0 0 0" >
          <a-entity position="2.75 0 0" rotation="45 -90 -45" scale="0.005 0.005 0.005" object-model="src: url(assets/iss-6.json);">
          </a-entity>
        </a-entity>
      </a-entity>
      <a-light type="ambient" intensity="1.4"></a-light>
  </a-scene>

  `,
})

export class AframeScene implements OnInit, OnChange {
  rotx:number;
  roty:number;
  rotz:number;
  rotation:string;
  data;
  init;
    @Input() data;
    constructor(){
      this.rotx = 0;
      this.roty = 0;
      this.rotz = 0;
      this.init = false;
    }
    ngOnInit(){
      this.init = true;
    }
    ngOnChanges(changes:simpleChanges){
        if(this.init){
            this.roty = changes.data.currentValue.longitude;
            this.rotz = changes.data.currentValue.latitude;
            document.querySelector("#rotator").setAttribute("rotation",{x:this.rotx, y:this.roty, z:this.rotz});

        }


    }

  
}