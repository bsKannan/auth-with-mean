import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'


import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';


const routes: Routes =[
  {
    path:'',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
