import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';

@Component({
  selector: 'app-replydialog',
  templateUrl: './replydialog.component.html',
  styleUrls: ['./replydialog.component.css']
})
export class ReplydialogComponent {

  reply !: String;

  constructor(private formBuilder : FormBuilder,  private dialogRef : MatDialogRef<ReplydialogComponent>,private tweetdataservice:TweetDataServiceService,
    @Inject(MAT_DIALOG_DATA) public editData : any) { }

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

    reply_body={

    };
    ngOnInit(): void {
      
    if(this.editData){
        this.tweet_row = this.editData;
       }

  

  }

  onreplySubmit()
  {
    console.log(this.tweet_row.id);
    console.log({email:localStorage.getItem("email"),reply:this.reply});

    this.tweetdataservice.reply({email:localStorage.getItem("email"),reply:this.reply},this.tweet_row.id).subscribe( 
      (response:any)=>{
          
    console.log(response);
    this.dialogRef.close('save');

  


     },
        (error)=>{
         console.log(error);
        

    this.dialogRef.close('save');
  });

}
}
