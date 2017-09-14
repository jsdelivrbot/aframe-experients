import {Component, Input} from '@angular/core';

@Component({
  selector: 'draw-map',
  templateUrl: 'src/map.comp.html',
})
export class mapComp implements OnInit{
  // declare the variables
  map;
  marker;
  @Input() data;
//i need the init, to check when the map has been initialized - so the update won't happen on a empty map object
constructor(){
  this.init=false;
  this.mapZoom = 3;
}
// init map
ngOnInit(){
  var latlng = new google.maps.LatLng(0, 0);
  this.map = new google.maps.Map(document.querySelector("#map"), {
  center: latlng,
  zoom: this.mapZoom
});
  // init marker
	this.marker = new google.maps.Marker({
		position: new google.maps.LatLng(0, 0),
		map: this.map,
		icon: "https://cdn.glitch.com/0a2f4fc6-3559-490b-87e8-cff87d766093%2Fiss-silhouette-300px.png?1504803206654"
    });
  this.init = true;
};
ngOnChanges(changes){
  if(this.init){
    this.updateMarker(changes.data.currentValue);
  }

}
// updates the marker
updateMarker(data):void{
    this.map.setCenter({lat: data.latitude, lng: data.longitude});     
    this.marker.setPosition(new google.maps.LatLng(data.latitude, data.longitude});
  }

}