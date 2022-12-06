import { Component } from '@angular/core';
import {FormControl, NgModel, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';
import {TweetpublishService } from 'src/app/services/TweetPublishService/tweetpublish.service';
import {MatDialog} from '@angular/material/dialog';
import { ReplydialogComponent } from '../../replydialogcomponent/replydialog/replydialog.component';
import { EdittweetcomponentComponent } from '../../edittweetcomponent/edittweetcomponent/edittweetcomponent.component';
import { ViewReplyComponent } from '../../view-reply/view-reply.component';

@Component({
  selector: 'app-mytweets',
  templateUrl: './mytweets.component.html',
  styleUrls: ['./mytweets.component.css']
})
export class MytweetsComponent {


  
  constructor(private snack:MatSnackBar,private router:Router,private tweetService:TweetpublishService,
    private tweetdata:TweetDataServiceService,private dialog:MatDialog ) { }

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


  ngOnInit(): void {
    this.onGetAllMyTweets();
  }



  onGetAllMyTweets(){

    this.tweetdata.getTweetsByUsername().subscribe(
         
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

onDelete(id:any)
{
  this.tweetdata.delete(id).subscribe(
         
    (response:any)=>{
        
      
     console.log(response);
     this.onGetAllMyTweets();
     window.location.reload();
     this.snack.open('Tweet Deleted Successfully !!','ok',{
      verticalPosition:'bottom',
      duration:3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });


 


    },
       (error)=>{
        console.log(error);
        this.snack.open('Something went wrong when deleting tweet','ok',{
          verticalPosition:'bottom',
          duration:3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
       }
  );

}

  
  
openDialog(tweet_row:any) {
  this.dialog.open(EdittweetcomponentComponent, {
    width:'35%',
    height:'30%',
    data:tweet_row
  }).afterClosed().subscribe(val=>{
    if(val==='update'){
      this.onGetAllMyTweets();
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
      this.onGetAllMyTweets();
    }
  })
}

}
