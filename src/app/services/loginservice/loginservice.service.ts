import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url="http://localhost:8082";

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  doLogin(credentials:any){

    let params = new HttpParams();
    params = params.append('email',credentials.email);
    params = params.append('password',credentials.password);
      
    return this.http.get(`${this.url}/api/v1.0/tweets/login`,{params: params});
   }


   doforgotpassword(newPassword:any,email:any){

    let params = new HttpParams();
    params = params.append('newPassword',newPassword);
    params = params.append('email',email);
      
    return this.http.get(`${this.url}/api/v1.0/tweets/forgot`,{params: params});
   }

   getUserByEmail()
   {
    let emailId = localStorage.getItem('email');
    return this.http.get(`${this.url}/api/v1.0/tweets/getCurrentUser/${emailId}`);
   }

   loginUser(email:any,token:any)
   {
     
     localStorage.setItem("email",email);
     localStorage.setItem("token",token);
     return true;
   }

   public getUser()
   {
     let userStr = localStorage.getItem("user");
     if(userStr != null)
     {
       return JSON.parse(userStr);
     }else{
       this.logout();
       return null;
     }
   }

   public setUser(user:any)
   {
     
     localStorage.setItem("user", JSON.stringify(user));
   }
     

   getToken()
   {
     return localStorage.getItem("token");
   }

   getEmail()
   {
    return localStorage.getItem("email");

   }

   isLoggedIn()
   {
     let token = localStorage.getItem("token");
     if(token==undefined || token===''||token==null)
     {
       return false;
     }else{
       return true;
     }

   }


   logout(){
     localStorage.removeItem('token');
     localStorage.removeItem('email');
     localStorage.clear;
     return true;
   }


}
