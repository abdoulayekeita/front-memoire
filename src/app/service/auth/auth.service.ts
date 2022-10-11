import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserDto } from '../../model/user-dto';
import { Response } from '../../model/response';
import { LoginModel } from 'src/app/model/login-model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  PATH_OF_API = 'http://localhost:3000/api';
  private headers = new HttpHeaders(
    {
        'Content-Type':  'application/json',
        'Accept': '*/*',
    }
);
USER_TOKEN_SESSION_ATTRIBUTE_NAME = 'authenticatedToken'
IS_DASHBORD = false;

constructor(private httpclient: HttpClient) { }
public changeState(val: boolean) {
  this.IS_DASHBORD = val;
}
isDashbord() {
  return this.IS_DASHBORD;
}
 public login(loginData: LoginModel) {
  console.log('eeeeeeeeeeeeee')
  const options = { headers: this.headers};
  const payload = new HttpParams()
  .set('username', loginData.username)
  .set('password', loginData.password);

    return this.httpclient.post(this.PATH_OF_API + '/login', payload);
  }
  registerSuccessfulLogin(token: string) {
    sessionStorage.setItem(this.USER_TOKEN_SESSION_ATTRIBUTE_NAME, token)
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_TOKEN_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }
  logout() {
    sessionStorage.removeItem(this.USER_TOKEN_SESSION_ATTRIBUTE_NAME);
  }
public register(registerUserModel: UserDto) {
    console.log(registerUserModel)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*',
      })
    };
    console.log(registerUserModel) 
    
    return this.httpclient.post<any>( this.PATH_OF_API+'/user/save', 
    registerUserModel
  );
}

}
