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
   

   }
}
