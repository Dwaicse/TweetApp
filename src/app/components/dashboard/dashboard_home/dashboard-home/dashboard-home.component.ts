import { Component } from '@angular/core';
import {FormControl, NgModel, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';
import {TweetpublishService } from 'src/app/services/TweetPublishService/tweetpublish.service';
import { ReplydialogComponent } from '../../replydialogcomponent/replydialog/replydialog.component';
import {MatDialog} from '@angular/material/dialog';
import { NullTextPipe } from '../null-text.pipe';
import { ViewReplyComponent } from '../../view-reply/view-reply.component';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  searchText:string='';

  constructor(private snack:MatSnackBar,private router:Router,private tweetService:TweetpublishService,private tweetdata:TweetDataServiceService,
    private login:LoginserviceService
    ,private dialog:MatDialog ) {
      
     }

    

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
        replydate:"",
        reply:""
      }],
      likes:[{
        emailId:""
      }],
      tweetdate:""
    }];

    tweet_row={
      id:"",
      email:"",
      tweetbody:"",
      replies:[{
        emailid:"",
        replydate:"",
        reply:""
      }],
      likes:[{
        emailId:""
      }],
      tweetdate:""
    };

  

   default_likes=0


  ngOnInit(): void {
    
    this.onGetAllTweets();
   
    
  }

  getLikeCount(tweet:any)
  {
    if(tweet.like.length)
    {
      return 0;
    }
    return tweet.like.length
  }


  onGetAllTweets(){

    this.tweetdata.getAllTweets().subscribe(
         
      (response:any)=>{
          
       this.tweet.tweetbody="";  
       console.log(response);
       this.tweetList = response;
       this.tweetList.reverse();
       

   


      },
         (error)=>{
          console.log(error);
          this.snack.open('Something went wrong when loading tweets','ok',{
            verticalPosition:'bottom',
            duration:3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
         }
    );

  }


  

 onLikeSubmit(tweet:any){
  console.log(tweet.id);
  this.tweetdata.like(tweet.id).subscribe(
         
    (response:any)=>{
        
       console.log(response);
       window.location.reload();
       this.snack.open('Liked !!','ok',{
        verticalPosition:'bottom',
        duration:3000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });


 


    },
       (error)=>{
        console.log(error);
        this.snack.open('Something went wrong when loading tweets','ok',{
          verticalPosition:'bottom',
          duration:3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
       }
  );


 }



  openDialog(tweet_row:any) {
    this.dialog.open(ReplydialogComponent, {
      width:'35%',
      height:'30%',
      data:tweet_row
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.onGetAllTweets();
      }
    })
  }

  openDialogViewReply(tweet_row:any) {
    this.dialog.open(ViewReplyComponent, {
      width:'40%',
      height:'60%',
      data:tweet_row
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.onGetAllTweets();
      }
    })
  }

  onSearchTextEntered(enteredSearchValue:string){
    this.searchText=enteredSearchValue;
    console.log(this.searchText);

  }

}
