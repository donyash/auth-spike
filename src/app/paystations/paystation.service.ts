import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IPayStation } from './paystation';
import {HttpHeaders} from '@angular/common/http'
import{HeadersService} from '../shared/headers.service';

@Injectable()
export class PayStationService  {
   private _productUrl = 'http://localhost:50779/v1/PayStation/GetAllPaymentStations';
   private _paystationUrlbyId = 'http://localhost:50779/v1/PayStation/GetPaymentStationById';

   private _logInfo: string;

  constructor(private _http: HttpClient, private _headersService: HeadersService) { }

    getPayStations(): Observable<IPayStation[]> {
       return this._http.get<IPayStation[]>(this._productUrl)
           .do(data => console.log('All: ' +  JSON.stringify(data)))
          .catch(this.handleError);
   }
   getPayStationById(id: string): Observable<IPayStation[]> {

    const token = this._headersService.getUserToken();
    
    const headers = new HttpHeaders(
        {
            'Content-Type':'application/json; charset=utf-8', 
            'Authorization': 'Bearer ' + token.token,
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        });

    return this._http.get<IPayStation[]>(this._paystationUrlbyId + '?id=' + id, 
         {headers: headers})
        .do(data => console.log(JSON.stringify(data)))
       .catch(this.handleError);
}

   private handleError(error: HttpErrorResponse) {
       // TODO:send to logging infrastructure
       //console.error(error);
       console.error(error.message);
       return Observable.throw(error.message);    //|| 'Server error');
   }
}
