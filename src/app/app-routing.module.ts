import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  // declarations:[
  //   AppComponent,
  //   NotfoundComponent
  // ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
