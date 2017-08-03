//our root app component
import {Component, NgModule, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { aScene } from './a-scene.comp.ts';
import { aScenePhoto } from './a-scene.photo.comp.ts';
import { mainPanel } from './mainpanel.comp.ts';

import {Routes,RouterModule} from'@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
   styleUrls:['src/styles.css']
})
export class App {
  
}
const routes: Routes = [
  {path: 'simple',component:aScene},
  {path: 'photo',component:aScenePhoto},
  {path: '',component:mainPanel},
  {path: 'photo/:photoAsset',component:aScenePhoto},


];
const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [ BrowserModule,
              FormsModule,
              routing],
  declarations: [ App,
                  aScene,
                  aScenePhoto,
                  mainPanel,
                  ],
  bootstrap: [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    
})
export class AppModule {}