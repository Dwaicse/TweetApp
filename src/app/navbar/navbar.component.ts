import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderserviceService } from '../services/loaderservice/loaderservice.service';
import { LoginserviceService } from '../services/loginservice/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loggedIn=false;
  user:any = null;
 
   constructor(private loginService:LoginserviceService,private snack:MatSnackBar, public loaderservice:LoaderserviceService)
    { }
 
   ngOnInit(): void {
     this.loggedIn=this.loginService.isLoggedIn();
     this.user = this.loginService.getUser();
     this.loginService.loginStatusSubject.asObservable().subscribe(data=>{
       this.loggedIn = this.loginService.isLoggedIn();
       this.user = this.loginService.getUser();
 
 
   });
 }
 
   logoutUser()
   {
     this.loginService.logout();
 
     location.reload();
    
   }

}
