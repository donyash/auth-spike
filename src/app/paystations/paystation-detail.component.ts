import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PayStationService } from './paystation.service';
import { IPayStation } from './paystation';
import { LoginService } from '../shared/login.service';


@Component({
  //selector: 'app-paystation-detail',
  templateUrl: 'paystation-detail.component.html',
  styleUrls: ['paystation-detail.component.css']
})
export class PayStationDetailComponent implements OnInit {
  pageTitle: string = 'PayStation Detail';
  errorMessage: string;
  paystation: IPayStation[];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _payStationService: PayStationService,
    private _loginService: LoginService) {
  }

  ngOnInit() {
    console.log('ngOnInit: paystation-detail-component');   

    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      //const id = +param;   //+converts to number
      const id = param;        
      this.getPayStation(id);
    }
  }

  getPayStation(id: string) {

      //TODO: add a Guard service
      if ( !this._loginService.isLoggedIn())
      return this._router.navigate(['/login']);


    this._payStationService.getPayStationById(id).subscribe(
      paystation => this.paystation = paystation,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/paystations']);
  }

}
