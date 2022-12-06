import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private loginService:LoginserviceService,private router:Router,private snack:MatSnackBar){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn())
      {
        return true;
      }
   



     this.router.navigate(['login']); 
     this.snack.open('Logged Out Successfully! Kindly Login!','ok',{
      verticalPosition:'bottom',
      duration:3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    
    return true;
  }
  
}
