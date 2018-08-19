import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search: Search;

  constructor(private http: HttpClient) {
    this.search = new Search('');
  }

  searchReturn() {

    interface ApiResponse {
      results: string;
    }
    const promise = new Promise ((resolve) =>
      this.http.get<ApiResponse>('').toPromise().then(response => {
        this.search.results = response.results;
        resolve();
      })
    );
    return promise;
  }
}


