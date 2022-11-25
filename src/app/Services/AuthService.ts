import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../tokenModels/tokens';
import {environment} from '../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  // @ts-ignore
  private loggedUser: string;

  private  helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(user: { userName: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.baseUrl}/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.userName, tokens)),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`${environment.baseUrl}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        return of(false);
      }));
  }

  getAccessToken(){
    return localStorage.getItem(this.JWT_TOKEN)
  }

  isLoggedIn() {
    if (!!this.getJwtToken()){
      // @ts-ignore
      return !this.helper.isTokenExpired(localStorage.getItem(this.JWT_TOKEN));
    }
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${environment.baseUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    // @ts-ignore
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
