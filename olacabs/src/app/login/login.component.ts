import { routes } from './../app.router';
import { Router } from '@angular/router';
import { connectService } from './../connect.service';



import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[connectService]
})
export class LoginComponent implements OnInit {



  

  form=new  FormGroup({
   email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });

  constructor(private service:connectService,private router:Router) { 
    
      }

  ngOnInit() {
  }

  
  submit(l){
    let data=l.value;
    console.log(l.value.email);
    console.log(l.value.password);
   
//session
    




    this.service.login(data).subscribe(response=>{
      console.log(response);
      let m=response.json();

      //getting id
     console.log(m.obj._id);
 //session storage
 sessionStorage.userId=m.obj._id;


      if(m.status==true){
        this.router.navigate(['./dashboard']);

      }
      else{
        this.router.navigate(['./login']);
      }
    });
    
  }
}
