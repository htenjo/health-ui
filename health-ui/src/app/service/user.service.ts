import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  ENDPOINT_URL:string = "http://localhost:8080/user/";

  constructor(private authHttp: AuthHttp) { }
  
  findUserByUsername(username: string) {
    return this.authHttp.get(this.ENDPOINT_URL + username)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}