import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';
import { TweetpublishService } from 'src/app/services/TweetPublishService/tweetpublish.service';
import { DashboardHomeComponent } from '../../dashboard_home/dashboard-home/dashboard-home.component';

@Component({
  selector: 'app-writetweet',
  templateUrl: './writetweet.component.html',
  styleUrls: ['./writetweet.component.css']
})
export class WritetweetComponent {


  constructor(private snack:MatSnackBar,private router:Router,private tweetService:TweetpublishService,private tweetdata:TweetDataServiceService ) { }

  tweet={
    token:localStorage.getItem('token'),
    tweetbody:""
    }

    email:any=localStorage.getItem('email');

    tweetList:any[]=[{
      id:"",
      email:"",
      tweetbody:"",
      replies:[{
        emailid:"",
        reply:""
      }],
      likes:[{
        emailId:""
      }],
      date:""
    }];

    

    tweetboxFormControl =  new FormControl('', [ Validators.maxLength(144)]);


  ngOnInit(): void {
    
  }






  onTweetPublish()
  {
    console.log("Tweet Submitted!");
    console.log(this.tweet);
    
    this.tweetService.publishTweet(this.tweet).subscribe(
         
      (response:any)=>{
          
       this.tweet.tweetbody="";

      
       this.tweetList=response;
       console.log(this.tweetList);

      
      window.location.reload();
          

   },
         (error)=>{
          console.log(error);
          this.snack.open('Something went wrong','ok',{
            verticalPosition:'bottom',
            duration:3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
         }
    );
  }

}
