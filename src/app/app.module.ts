import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './user.service';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { SearchService } from './search.service';
import { HighlightDirective } from './highlight.directive';
import { ResultsComponent } from './results/results.component';
import { ERRORComponent } from './error/error.component';

// Defining Routes
const routes: Routes = [
 {path: 'search', component: ResultsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HighlightDirective,
    ResultsComponent,
    ERRORComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
