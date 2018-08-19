import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from './search';

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
      this.http.get<ApiResponse>('https://api.github.com/users/eugeneznm/repos?access_token=aad4aef7cf6f937d79bc8dbef820c8eb33aae6ae').toPromise().then(response => {
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


