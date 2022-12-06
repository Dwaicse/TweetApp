import { Injectable } from '@angular/core';
import { HttpClient,HttpParams ,HttpHeaders} from '@angular/common/http';
import { LoginserviceService } from '../loginservice/loginservice.service';


@Injectable({
  providedIn: 'root'
})
export class TweetDataServiceService {

  url="http://localhost:8090";
  constructor(private http:HttpClient,private loginService:LoginserviceService) { }

  getAllTweets(){
    
    return this.http.get(`${this.url}/api/v1.0/tweets/all`);
   }

  getTweetsByUsername(){
    let params = new HttpParams();
     let email= this.loginService.getEmail()||"";
    params = params.append('email', email);
    
    return this.http.get(`${this.url}/api/v1.0/tweets/getUserAll`,{params:params});
  }

  like(param:any){
    console.log("inside like service")
    console.log(param)
    let params = new HttpParams();
    params=params.append('id',param);
    return this.http.put(`${this.url}/api/v1.0/tweets/like`,param,{params:params});
}



  reply(reply:any,param:any){
    let params = new HttpParams();
    params=params.append('id',param);
    return this.http.post(`${this.url}/api/v1.0/tweets/reply`,reply,{params:params});

  }

  edit(edit:any,param:any){
    let params = new HttpParams();
    params=params.append('id',param);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.url}/api/v1.0/tweets/update`,edit,{headers:headers,params:params});

  }

 delete(param:any){

  let params = new HttpParams();
  params=params.append('id',param);
  return this.http.delete(`${this.url}/api/v1.0/tweets/delete`,{params:params});

 }

  


}
