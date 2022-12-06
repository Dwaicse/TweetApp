import { Component,Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-view-reply',
  templateUrl: './view-reply.component.html',
  styleUrls: ['./view-reply.component.css']
})
export class ViewReplyComponent {


  reply !: String;

  constructor(private formBuilder : FormBuilder,  private dialogRef : MatDialogRef<ViewReplyComponent>,
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

  
        

    this.dialogRef.close('close');
  }

}


