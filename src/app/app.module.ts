import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';



// const routes: Routes = [

// ]
@NgModule({
  declarations: [
    // AppRoutingModule //Remove this module and put it into import
    AppComponent,
    NotfoundComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
