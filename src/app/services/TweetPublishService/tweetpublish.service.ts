import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetpublishService {

  url="http://localhost:8086";
  constructor(private http:HttpClient) { }

 publishTweet(tweet:any)
 {
  return this.http.post(`${this.url}/api/v1.0/tweets/add`,tweet);
 }
}
