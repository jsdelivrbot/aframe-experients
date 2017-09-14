//our root app component
import {Component, NgModule, VERSION, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { IssModule } from './iss.service';
import { AframeScene} from './aframe.scene.comp.ts';
import { mapComp } from './map.comp.ts'

@Component({
  selector: 'my-app',
  template: `
  <div class="mainsite" style="min-height:100vh">
  <div class="container">
  <div class="row" >
    <div class="col-md-7" style="height:50vh">
      <scene [data]="data"></scene>
    </div>
    <div class="col-md-5">
    <h2 style="color:white"> Realtime ISS Location </h2><br>
    <h4 style="color:white"> Use googlemaps to find the ISS on the 3D model !</h4>
    <h6 style="color:white"> Although the height is more or less accurate, the ISS scale is absolutely non - realistic.</h6>
    </div>
    </div>
    <div>
      <draw-map [data]="data"></draw-map>
    </div>
  </div>
  </div>
  `,
      
})
export class App {
  name:string;
  data;
  issSVC;
    constructor(issSVC: IssModule) {
    setInterval((e)=>{this.requestIssData(issSVC)},2000);
}
  requestIssData(service):void{
      service.getData().then(data=>{
      this.data = data;
      });
  }
}

@NgModule({
  imports: [ BrowserModule,HttpModule],
  declarations: [ App, AframeScene,mapComp ],
  providers: [ IssModule ],
  bootstrap: [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}