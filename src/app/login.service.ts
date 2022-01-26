import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginViewModel } from './login-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient: HttpClient | null = null;

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService) {  }

  currentUserName: string = "";

  public Login(loginViewModel: LoginViewModel): Observable<any>{
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("http://localhost:9090/authenticate", loginViewModel, {responseType: "json"})
    .pipe(map(user => {
      if (user) {
        this.currentUserName = user.UserName;
        sessionStorage['currentUser'] = JSON.stringify(user);
      }
      return user;
    }));
  }

  public Logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = "";
  }

  public isAuthenticated(): boolean {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token: null;
    if (this.jwtHelperService.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }

}
