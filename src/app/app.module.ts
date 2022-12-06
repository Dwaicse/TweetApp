import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import {MatGridListModule} from '@angular/material/grid-list';
import {TextFieldModule} from '@angular/cdk/text-field';
import { DashboardHomeComponent } from './components/dashboard/dashboard_home/dashboard-home/dashboard-home.component';
import { MytweetsComponent } from './components/dashboard/mytweets/mytweets/mytweets.component';
import { SideprofilebarComponent } from './components/dashboard/sideprofilebar/sideprofilebar/sideprofilebar.component';
import { WritetweetComponent } from './components/dashboard/writeTweet/writetweet/writetweet.component';
import { ReplydialogComponent } from './components/dashboard/replydialogcomponent/replydialog/replydialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EdittweetcomponentComponent } from './components/dashboard/edittweetcomponent/edittweetcomponent/edittweetcomponent.component';
import { AvatarModule } from 'ngx-avatar';
import { NullTextPipe } from './components/dashboard/dashboard_home/null-text.pipe';
import { ViewReplyComponent } from './components/dashboard/view-reply/view-reply.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponentComponent } from './HomeComponent/home-component/home-component.component';
import { UsercomponentComponent } from './components/usercomponents/usercomponent/usercomponent.component';
import { SearchboxComponent } from './components/dashboard/searchbox/searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardHomeComponent,
    MytweetsComponent,
    SideprofilebarComponent,
    WritetweetComponent,
    ReplydialogComponent,
    EdittweetcomponentComponent,
    NullTextPipe,
    ViewReplyComponent,
    HomeComponentComponent,
    UsercomponentComponent,
    SearchboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    TextFieldModule,
    MatDialogModule,
    AvatarModule,
    MatListModule
   
   
    
  ],
  providers: [[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
