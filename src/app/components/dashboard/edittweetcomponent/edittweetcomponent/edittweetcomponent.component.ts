import { JsonPipe } from '@angular/common';
import { Component,Inject } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';

@Component({
  selector: 'app-edittweetcomponent',
  templateUrl: './edittweetcomponent.component.html',
  styleUrls: ['./edittweetcomponent.component.css']
})
export class EdittweetcomponentComponent {

 
  tweet_data !: any;
  constructor(private formBuilder : FormBuilder,  private dialogRef : MatDialogRef<EdittweetcomponentComponent>,private tweetdataservice:TweetDataServiceService,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

    tweet_row={
      id:"",
      email:"",
      tweetbody:this.tweet_data,
      replies:[{
        emailid:"",
        reply:""
      }],
      likes:[{
        LikedBy:""
      }]
    };

    reply_body={

    };
    ngOnInit(): void {
      
      this.tweet_row.id = this.editData.id;
      this.tweet_row.email = this.editData.email;
      this.tweet_row.likes=this.editData.likes;
      this.tweet_row.replies=this.editData.replies;
      this.tweet_data = this.editData.tweetbody;
    
  

  }

  oneditSubmit()
  {
    

    console.log(this.tweet_data);
   this.tweet_row.tweetbody=this.tweet_data;
    console.log(this.tweet_row.id);

    console.log(this.tweet_row);
   // this.dialogRef.close('update');
    
   

    this.tweetdataservice.edit(this.tweet_row,this.tweet_row.id).subscribe( 
      (response:any)=>{
          
    console.log(response);
    
   this.dialogRef.close('update');
  


     },
        (error)=>{
         console.log(error);
    

    this.dialogRef.close('update');
  });
    

}



}
