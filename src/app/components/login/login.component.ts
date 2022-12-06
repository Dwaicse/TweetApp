import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';
import { RegistrationserviceService } from 'src/app/services/registrationservice/registrationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  namePattern = "^[a-zA-Z\\s]*$";
  passwardPattern = "'(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'";
  phonepattern = "^[6-9]{1}[0-9]{9}$";


  nameFormControl =  new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl =  new FormControl('', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  confirmpasswordFormControl =  new FormControl('', [Validators.required]);
  passwordFormControlLogin = new FormControl('', [Validators.required]);
  contactFormControl = new FormControl('',[Validators.required,Validators.pattern(this.phonepattern)])


  userDetails={
    name:"",
    email:"",
    contact:"",
    password:""

  };

  loginCredential={
    email:"",
    password:""

  }


  constructor(private snack:MatSnackBar,private router:Router,private register:RegistrationserviceService, private login : LoginserviceService) { }

  ngOnInit(): void {


  }

  confirmpass:any;

  onSubmitRegistration()
  {
    console.log("form is submit!");
    if((this.userDetails.name!='' && this.userDetails.email!=''))
    {
      console.log("Form Submitted!");
      
      
       this.register.doRegistration(this.userDetails).subscribe(
          
        (response:any)=>{

          this.snack.open('Registered Successfully! Please Login to Tweet!','ok',{
            verticalPosition:'bottom',
            duration:4000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          
          
          console.log(response);
         },
           (error)=>{
            console.log(error);
            this.snack.open('Email Id Already Exist Please Login!','ok',{
              verticalPosition:'bottom',
              duration:3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
           }
       );

    }
    
    else{
      this.snack.open('Name or Email Cannot be blanked!','ok',{
        verticalPosition:'bottom',
        duration:5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });

    }
  }

  forgotPassword(){
    this.login.doforgotpassword(this.userDetails.password,this.userDetails.email).subscribe(
          
      (response:any)=>{

        this.snack.open('Password Reset Successfully! Please Login to Tweet!','ok',{
          verticalPosition:'bottom',
          duration:4000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        
        
        console.log(response);
       },
         (error)=>{
          console.log(error);
          this.snack.open('Email Id Already Exist Please Login!','ok',{
            verticalPosition:'bottom',
            duration:3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
         }
     );

    
  }

  onSubmitLogin()
  {
    console.log("form is submit!");
    if((this.loginCredential.email!='' && this.loginCredential.password!=''))
    {
      console.log("Login Form Submitted!");
      
      
       this.login.doLogin(this.loginCredential).subscribe(
          
        (response:any)=>{
          
          console.log(response);
          this.login.loginUser(response.email,response.token);
          this.login.setUser(response);
        window.location.href="/dashboard"
        

           this.login.loginStatusSubject.next(true);

           
          
         },
           (error)=>{
            console.log(error);
            this.snack.open('Email is not Registered! Please register to continue!','ok',{
              verticalPosition:'bottom',
              duration:3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
           }
       );

    }else{
      this.snack.open('Email or Password Cannot be blanked!','ok',{
        verticalPosition:'bottom',
        duration:3000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });

    }
  }

}
