import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router, private cookie: CookieService) {}

  public isAuthorized(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get('accessToken'));
    return this.httpClient.get<any>( environment.baseUrl + '/auth/checkAuthorization', {headers: headers, observe: 'body'});
  }

  logoutUser() {
    this.clearUserData();
    this.router.navigateByUrl('/');
  }

  clearUserData(){
    this.cookie.delete('accessToken');
    this.cookie.delete('user');
    this.cookie.delete('firstName');
  }

  getAccessToken() : string {
    return this.cookie.get('accessToken');
  }

  updateToken(newToken: string){
    this.cookie.set('accessToken', newToken);
  }


}
