import { Injectable } from '@angular/core';
// import htttp module
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

user: User;

  constructor( private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, 0);
   }

   displayUser(searchfor) {
     interface ApiResponse {
      name: string;
      avatar_url: string;
      followers: number;
      following: number;
     }
     const promise = new Promise((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/search/users?q=' + searchfor)
      .toPromise().then(response => {
        this.user.name = response.name;
        this.user.avatar_url = response.avatar_url;
        this.user.followers = response.followers;
        this.user.following = response.following;
        console.log(response);
        resolve();
      });
    });
    return promise;
   }
   userReturn() {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
    }
    const promise = new Promise((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/users/eugeneznm?access_token=aad4aef7cf6f937d79bc8dbef820c8eb33aae6ae')
      .toPromise().then(response => {
        this.user.name = response.name;
        this.user.avatar_url = response.avatar_url;
        this.user.followers = response.followers;
        this.user.following = response.following;
        console.log(response);
        resolve();
      });
    });
    return promise;

   }
}
