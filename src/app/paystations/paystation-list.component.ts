 import { Component, OnInit }  from '@angular/core';
 import { Router } from '@angular/router';

 import { IPayStation } from './paystation';
 //import { ProductFilterPipe } from './product-filter.pipe';
 import { StarComponent } from '../shared/star.component';
 import { PayStationService } from './paystation.service';
 import { LoginService } from '../shared/login.service';
  import { Observable } from 'rxjs/Observable';


 @Component({
    //selector: 'pm-products',
     templateUrl: 'paystation-list.component.html',
     styleUrls: ['paystation-list.component.css']  //,
     //pipes: [ProductFilterPipe]  //,    todo: move to module declaration
     //directives: [StarComponent, ROUTER_DIRECTIVES]
 })
 
 
 export class PayStationListComponent implements OnInit {
     
     pageTitle: string = 'PayStation Listing';
     paystations: IPayStation[];
     //paystations: Observable<IPayStation[]>;
     
     imageWidth: number = 50;
     imageMargin: number = 2;
     showImage: boolean = false;
     listFilter: string;
     errorMessage: string;



     constructor(private _payStationService: PayStationService,
     private _loginService: LoginService) {
     }

     toggleImage(): void {
         this.showImage = !this.showImage;
     }

    ngOnInit(): void {
         console.log('ngOnInit: paystation-list-component');   
         var nameInfo = this._loginService.getUserName();
         console.log('userName: +++ for all paystation get: ' + nameInfo);   
           
        this._payStationService.getPayStations()
                      .subscribe(
                        paystations => this.paystations = paystations,
                        error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'PayStation List: ' + message;
    }
 }
