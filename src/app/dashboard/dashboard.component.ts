import { Component, OnInit } from '@angular/core';
import{LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public pageTitle: string = "Dashboard";
    isLoggedIn: boolean;
    loggedInUser: string;
    userToken: string;
    tokenFirstPart: string = "012345678901234567890";
    tokenLastPart: string = "abcdefghijklmnopqrstuvwxyz";
    tokenLength: number = 50;
    
   constructor(private loginService: LoginService,
                private router:Router){
       
   } 
 ngOnInit(): void{
      console.log('ngOnInit: DashboardComponent');  
      this.isLoggedIn = this.loginService.isLoggedIn(); 
      this.loggedInUser = this.loginService.getUserName() == null ? 'Not logged in' :  this.loginService.getUserName();
      
      if(this.isLoggedIn){
        this.userToken = this.loginService.getToken();
        this.tokenLength = this.userToken.length;
        this.tokenFirstPart = this.userToken.substring(0,50);
        this.tokenLastPart = this.userToken.substring(this.tokenLength - 50, this.tokenLength);
      }
      
      console.log('logged in user:' + this.loginService.getUserName());        
    }
  logIn() {
         this.router.navigate(['/login']);
    }
  logOut() {
        this.loginService.setLogin(null,null,null);
        return this.router.navigate( ['/welcome'] );   //TODO: create logout component
    }
   close():void{
    var parent = document.getElementById("alert-div");
    var child = document.getElementById("alert");
    parent.removeChild(child);
   }
}
