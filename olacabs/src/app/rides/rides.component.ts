import { connectService } from './../connect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css'],
  providers:[connectService]
})
export class RidesComponent implements OnInit {

  b:any;
  a:any;

  // loc:any;
  // dest:any;


//view backend values using services
  constructor(private ridevalues:connectService) { 
     

    var uid=sessionStorage.userId;
     
    this.ridevalues.ridevalues(uid).subscribe(response=>{
      
      this.a=response.json();

      this.b=this.a.event;
      console.log(this.b);

    
    })


  }

  submit(l){
   
     
  //getting data from seesion

    var rides= sessionStorage.ridesvalues;
    console.log(rides);








    
  }



  ngOnInit() {
  }



  

}
