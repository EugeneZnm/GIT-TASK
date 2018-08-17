import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [UserService]
})
export class SearchComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient, public _service: UserService) { }

  ngOnInit( ) {
    this._service.userReturn();
    this.user = this._service.user;
  }

}
