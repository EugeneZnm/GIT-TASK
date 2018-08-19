import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search: Search;

  constructor(private http: HttpClient) { }
}
