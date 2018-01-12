 import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
    import {Injectable} from '@angular/core'
    import 'rxjs/add/operator/map'
    import {User} from '../shared/user'
    import {HeadersService} from './headers.service'
    import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

    
    @Injectable()
    export class UserService {
        
        //private _loginUrl = './api/login';
        //private _loginUrl = 'http://localhost:60323/Token';
        //private _loginUrl = 'http://localhost:56077/Account/Login';

        private _loginUrl = 'http://localhost:56077/api/token/create';


        constructor(private _http: HttpClient, private _header:HeadersService, private _login: LoginService) {
         
        }
        public insert(u:User) {
        // return this._http
        //         .post(this._loginUrl, JSON.stringify(u),this._header.getJsonHeaders())
        //         .map(res => res.json());
                
       //var data = "username=" + "donyash@hotmail.com" + "&password=" + "password1" + "&grant_type=password";
    
       const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

       return this._http.post(
                    this._loginUrl, 
                    this._header.formatUserLogin(u),
                   {headers: headers}
                )
                    //.map(res => res.json() );
                    //.do(data => console.log('The data: ' +  JSON.stringify(data)));
                   // .catch(this.handleError));
        }
        
    //    private handleError(error: any) {
    //       // TODO:send to logging infrastructure
    //       console.error(error);
    //       console.error(error.json().message);
    //       throw error.json().error || error.json().message;  
    //      //return Observable.throw(error.json().error || error.json().message);    //|| 'Server error');
    //     }
    }