import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import { Search } from '../search';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // inject service into providers
  providers: [SearchService]
})
export class UserComponent implements OnInit {
  [x: string]: any;
  search: Search;

  constructor(public http: HttpClient, public _search: SearchService, public users: UserService) { }

  display(searchfor) {
    this.users.displayUser(searchfor);

  }

  ngOnInit() {
    // this.users = this.displayUser();
    // this.search = this._search.search;
  }

}
