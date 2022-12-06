import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  logninbutton:any = "Login Here!";
  constructor(private login:LoginserviceService) { }

  ngOnInit(): void {
    if(this.login.isLoggedIn())
    {
      this.logninbutton = "Go to Dashboard!";
    }
  }
}
