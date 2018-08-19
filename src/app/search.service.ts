import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from './search';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search: Search;

  constructor(private http: HttpClient) {
    this.search = new Search('', '', '');
  }

  searchReturn() {

    interface ApiResponse {
      data: any;
      name: string;
      full_name: string;
      url: string;
    }
    const promise = new Promise ((resolve) =>
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>(environment.repoUrl).toPromise().then(response => {
        this.search.name = response.name;
        this.search.full_name = response.name;
        this.search.url = response.url;
        console.log(response);
        resolve();
      })
    );
    return promise;
  }
}


