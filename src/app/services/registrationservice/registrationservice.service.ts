import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  url="http://localhost:8084"

  constructor(private http:HttpClient) { }

  doRegistration(userDetails:any){

    return this.http.post(`${this.url}/api/v1.0/tweets/register`,userDetails);
  }
}
