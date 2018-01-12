import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './to-do/to-do.service';
import { WelcomeComponent } from './home/welcome.component';
import { LoginFormComponent } from './shared/loginform.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HeadersService } from './shared/headers.service';
import { LoginService } from './shared/login.service';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayStationListComponent } from './paystations/paystation-list.component';
import { PayStationService } from './paystations/paystation.service';
import { PayStationDetailComponent } from './paystations/paystation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    WelcomeComponent,
    LoginFormComponent,
    LoginComponent,
    DashboardComponent,
    PayStationListComponent,
    PayStationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginFormComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'paystations', component: PayStationListComponent},
      { path: 'paystations/:id', component: PayStationDetailComponent},
      { path: 'login',  component: LoginComponent},
      { path: 'dashboard',  component: DashboardComponent }
    ])
  ],
  providers: [TodoService, UserService, HeadersService, 
    LoginService, 
    PayStationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
