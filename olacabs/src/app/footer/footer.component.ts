import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  footer=[{
    id:"1",
    name:"List Your Property"
    
  },
{
  id:"2",
  name:"Find Your Rental Property"
}]


  socialLink=[{
    id:"1",
    name:"facebook",
    icon:"fa fa-facebook"
  },
  { 
    id:"2",
    name:"Twitter"
  },
  {
    id:"3",
    name:"Google Plus"
  },
  {
    id:"4",
    name:"Linkedin"
  },
  {
    id:"5",
    name:"YouTube"
  },
  {
    id:"6",
    name:"mail"
  }
]
  
contactList=[
  {
  id:"1",
  name:"Instarent"
 },
 {
   id:"2",
   name:"Sydney australia"
 },
 {
   id:"3",
   name:"info@gmail.com"
 }
 

]
  constructor() { }

  ngOnInit() {
  }

}
