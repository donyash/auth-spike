
import {Injectable} from '@angular/core'
import {HttpHeaders} from '@angular/common/http'

import {LoginService} from '../shared/login.service'
import {User} from '../shared/user'
 
@Injectable()
export class HeadersService {
    constructor(private _login: LoginService){}
	
	getContentTypeHeaders(token?:string){
        var headers = new Headers();
         console.log('Adding header:');
         //headers.append('Access-Control-Allow-Origin', '*');
         
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', '*');
        
        console.log('Done adding header.');
        
        if (token)
            //headers.append('x-access-token',token)
            headers.append('Authorization','Bearer ' + token);
            
            //try this:
            //headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Access-Control-Allow-Methods', '*');
            headers.append('Access-Control-Allow-Origin', '*');
            
		return {headers: headers};
	}
    
     getUserToken(){
         console.log('user token: ' + this._login.getToken());
         console.log('user: ' + this._login.getUser());
         var token = this._login.getToken();

	 	// var headers = new Headers();
        //      headers.append('Authorization','Bearer ' + this._login.getToken());
        //      //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //      headers.append('Access-Control-Allow-Methods', '*');
        //      headers.append('Access-Control-Allow-Origin', '*');
        
        //return {headers: headers};
	 	return {token};
         
	 }
     
     formatUserLogin(user: User): string{
         var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
         return data;
     }


}