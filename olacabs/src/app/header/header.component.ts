import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerlist=[{
    id:"1",
    name:"Home",
    Route:"body"
  },
 {
   id:"2",
   name:"Services",
   Route:"services"
 },
{
  id:"3",
  name:"Category",
  Route:"rides"
}
]

 headerleft=[{
   id:"1",
   name:"Sign Up",
   Route:"signup",
   icon:"glyphicon glyphicon-user"
 },
{
  id:"2",
  name:"Login",
  Route:"login",
  icon:"glyphicon glyphicon-log-in"
}]

  constructor() { }

  ngOnInit() {
  }

}
