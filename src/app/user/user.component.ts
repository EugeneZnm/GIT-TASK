import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import { Search } from '../search';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // inject service into providers
  providers: [SearchService]
})
export class UserComponent implements OnInit {
  search: Search;

  constructor(public http: HttpClient, public _search: SearchService) { }

  ngOnInit() {
    this._search.searchReturn();
    this.search = this._search.search;
  }

}
