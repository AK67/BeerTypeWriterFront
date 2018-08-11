import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RestingFaceComponent } from './resting-face/resting-face.component';
import {RouterModule , Routes} from '@angular/router';
import { patch } from '../../node_modules/webdriver-js-extender';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes: Routes = [
  
    {path: 'home',component:RestingFaceComponent},
    {path:'' ,redirectTo:'/home',pathMatch:"full" }
  
]
console.log("routing");
@NgModule({
  declarations: [
    AppComponent,
    RestingFaceComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
