import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  /*
  findUserByUsername(username: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.get(ENDPOINT_URL, { headers: headers })
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  */
}