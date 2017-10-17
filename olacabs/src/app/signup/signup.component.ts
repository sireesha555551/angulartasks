
import { routes } from './../app.router';
import { Router } from '@angular/router';


import { connectService } from './../connect.service';
import { FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[connectService]
})
export class SignupComponent implements OnInit {

 form=new FormGroup({
  username:new FormControl('',Validators.required),
   email:new FormControl('',Validators.required),
   password:new FormControl('',Validators.required),
   mobile:new FormControl('',Validators.required),
   ConformPassword:new FormControl('',Validators.required)
 });

  constructor( private service:connectService,private router:Router) { }

  ngOnInit() {
  }
  submit(l){
    let data=l.value;
    console.log(data.username);
    console.log(data.email);
    this.service.postdata(data).subscribe(response=>{
      console.log(response);
      let m=response.json();
      if(m.status==true){
        this.router.navigate(['./login']);
  
      }
      else{
        this.router.navigate(['./signup']);
      }
    });
    
  }
   
  
  }
  
  
   
  
  


