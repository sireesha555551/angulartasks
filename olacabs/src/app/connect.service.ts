import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';


@Injectable()

export class connectService {

    posts:any



  



    // return this.http.get(...)
    // .map(res => res.json())
    
    
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { 


        http.get("http://localhost:3019/api/rides")
        .subscribe(
          response =>
              this.posts=response.json());
              
      }
  
    

    postdata(data) {
        return this.http.post("http://localhost:3019/api/register",data);
        
    }

    login(data) {
        return this.http.post("http://localhost:3019/api/login", data);
        
    }
    rides(data) {
        return this.http.post("http://localhost:3019/api/rides", data);
        
    }

    ridevalues(data){
        return this.http.get("http://localhost:3019/api/ridevalues/"+data);
    }


    
    
}