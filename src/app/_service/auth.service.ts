import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private AUTH_API = 'http://localhost:8085/user/login';
  // private AUTH_APIR = 'http://localhost:8085/user/register';
  // constructor(private http:HttpClient) { }
  // login(user:any) : Observable<any>{
  //   return this.http.post(this.AUTH_API,user);
  // }
  // register(user:any): Observable<any> {
  //   return this.http.post(this.AUTH_APIR, user);
  // }
  private _registerUrl = "http://localhost:8085/user/register";
  private _loginUrl = "http://localhost:8085/user/login";
  
  constructor(private http:HttpClient) { }

  register(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  getToken() {
    return localStorage.getItem('token')
  }
}