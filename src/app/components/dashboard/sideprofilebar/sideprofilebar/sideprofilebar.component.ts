import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';

@Component({
  selector: 'app-sideprofilebar',
  templateUrl: './sideprofilebar.component.html',
  styleUrls: ['./sideprofilebar.component.css']
})
export class SideprofilebarComponent {


 email = localStorage.getItem('email');

 constructor(private login:LoginserviceService,private snack:MatSnackBar){}
  ngOnInit(): void {
    this.getUserDetails();
    
  }
  user={
    
    id: "",
    name: "",
    email: "",
    password: "",
    contact: ""

   }

  getUserDetails()
{
  this.login.getUserByEmail().subscribe(
         
    (response:any)=>{
        
     console.log(response);
     this.user = response;
     

 


    },
    (error:any)=>{
        console.log(error);
        this.snack.open('Something went wrong when loading users','ok',{
          verticalPosition:'bottom',
          duration:3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
       }
  );
}


}
