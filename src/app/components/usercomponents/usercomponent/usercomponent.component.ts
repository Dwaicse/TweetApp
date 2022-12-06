import { Component } from '@angular/core';
import {FormControl, NgModel, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TweetDataServiceService } from 'src/app/services/TweetDataService/tweet-data-service.service';
import {TweetpublishService } from 'src/app/services/TweetPublishService/tweetpublish.service';

import {MatDialog} from '@angular/material/dialog';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';


@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent {

  
  searchText:string='';
  constructor(private snack:MatSnackBar,private router:Router,private userservice:UserserviceService
     ) { }

  

    email:any=localStorage.getItem('email');

    user_list:any[]=[{
      id:"",
      name:"",
      email:"",
      password:"",
      contact:""
    
     
    }];

    user_row={
      id:"",
      name:"",
      email:"",
      password:"",
      contact:""
    };

   default_likes=0


  ngOnInit(): void {
    
    this.onGetAllUsers();
    
  }



  onGetAllUsers(){

    this.userservice.getallUsers().subscribe(
         
      (response:any)=>{
          
      this.user_list = response;
      this.user_list.reverse();
      console.log(this.user_list);
       

   


      },
         (error)=>{
          console.log(error);
          this.snack.open('Something went wrong when loading users','ok',{
            verticalPosition:'bottom',
            duration:3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
         }
    );

  }

  onSearchTextEntered(enteredSearchValue:string){
    this.searchText=enteredSearchValue;
    console.log(this.searchText);

  }

}
