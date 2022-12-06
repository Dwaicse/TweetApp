import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url="http://localhost:8090";
  constructor(private http:HttpClient) { }
 
  getallUsers()
  {
    return this.http.get(`${this.url}/api/v1.0/tweets/users/all`);

  }
 
}
