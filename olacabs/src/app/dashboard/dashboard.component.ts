import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone,  ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { connectService } from './../connect.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[connectService]
})
export class DashboardComponent implements OnInit {


  fr:any;
  des:any;
  uid:any;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;




  
 
  @ViewChild("search")
  public searchElementRef: ElementRef;




  headerlist=[{
    
  id:"1",
  name:"Rides",
  Route:"/rides"
}
]

 headerleft=[{
   id:"1",
   name:"Sign Up",
   Route:"/signup",
   icon:"glyphicon glyphicon-user"
 },
{
  id:"2",
  name:"Login",
  Route:"/login",
  icon:"glyphicon glyphicon-log-in"
},
]

  constructor(

    private service:connectService,

    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone

  ) { }

  
  submit(l){
    let data=l.value;
    console.log(l.value.location);
    console.log(l.value.destination);
     
    this.fr=l.value.location;
    this.des=l.value.destination;
    
    //session
    this.uid=sessionStorage.userId;
    console.log(this.uid);

    data.uid=this.uid;


  
    this.service.rides(data).subscribe(response=>{
      console.log(response);

//getting backend data

//storing vvalues in session

    //  var ride=response.json();
    //  sessionStorage.ridesvalues=JSON.stringify(ride);
      
    });
    
  }
  

 

  
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
