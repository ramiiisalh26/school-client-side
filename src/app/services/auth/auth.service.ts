import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tokenInfo } from '../../api/auth/tokenInfo';
import { login } from '../../api/auth/login';
import { signIn } from '../../api/auth/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/api/v1/auth";

  private userSubject = new BehaviorSubject<tokenInfo | null>(null);
  private _tokenInfo = this.userSubject.asObservable();

  private username: String | undefined;
  private role: String | undefined;
  private expireDate: Date | undefined;
  private isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) { }

  public getTokenInfo(): Observable<tokenInfo | null>{
    return this._tokenInfo;
  }

  public login(login: login): Observable<login>{
    return this.httpClient.post<login>(`${this.baseUrl}/authenticate`,login,{withCredentials: true});
  }

  public signin(signin: signIn): Observable<signIn>{
    return this.httpClient.post<signIn>(`${this.baseUrl}/register`,signin);
  }

  public logout(): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/logout`,{},{withCredentials: true});
  }

  public getUsername(): String | undefined{
    return this.username;
  }

  public getRole(): String | undefined {
    return this.role;
  }

  public getExpireDate(): Date | undefined{
    return this.expireDate;
  }

  public setAuthenticatedState(auth_state: boolean) :boolean {
    return this.isAuthenticated = auth_state;
  }

  public authenticatedState(): boolean {
    return this.isAuthenticated;
  }
}
