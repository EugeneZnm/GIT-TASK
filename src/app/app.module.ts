import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './user.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { SearchService } from './search.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
