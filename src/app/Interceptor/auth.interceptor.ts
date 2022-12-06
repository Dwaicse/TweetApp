import { HttpEvent, HttpHandler,  HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { finalize, Observable } from "rxjs";
import { LoaderserviceService } from "../services/loaderservice/loaderservice.service";
import { LoginserviceService } from "../services/loginservice/loginservice.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    
    constructor(private loginService:LoginserviceService,public loaderservice:LoaderserviceService){

    }



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newReq=req;
        let token=this.loginService.getToken();
     
     
       

        console.log("Interceptor",token);
        
        if(token!=null)
        {
            console.log("Inside",token);
            newReq=newReq.clone({setHeaders:{Authorization:`${token}`}});
         
            
        }

        return next.handle(newReq).pipe(

            finalize(
             ()=>{
                 this.loaderservice.isLoading.next(false);
             }
 
            )
 
 
         );

    }

}