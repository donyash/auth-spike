import { Component } from '@angular/core';
import {LoginFormComponent} from '../shared/loginform.component'

@Component({
    templateUrl: 'welcome.component.html'
   // templateUrl: 'app/home/welcome.component.html'  //,
        //directives:[LoginFormComponent]
})
export class WelcomeComponent{
    public pageTitle: string = "Welcome";

 constructor(){ }   
}