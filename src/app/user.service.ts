import { Injectable } from '@angular/core';
// import htttp module
import {HttpClient} from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

user: User;

  constructor( private http: HttpClient) {
    this.user = new User('', '', '', '', '', 0);
   }

   userReturn() {
    interface ApiResponse {
      name: string;
      company: string;
      bio: string;
      email: string;
      public_repos: number;
    }
    const promise = new Promise((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/users/eugeneznm?access_token=aad4aef7cf6f937d79bc8dbef820c8eb33aae6ae')
      .toPromise().then(response => {
        this.user.name = response.name;
        this.user.company = response.company;
        this.user.bio = response.bio;
        this.user.email = response.email;
        console.log(response);
        resolve();
      });
    });
    return promise;

   }
}
