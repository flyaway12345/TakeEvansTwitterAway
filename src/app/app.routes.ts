import { Routes } from '@angular/router';
import { Error404Component } from '../error404/error404.component';
import { DisplayTweetComponent } from '../display-tweet/display-tweet.component';

export const routes: Routes = [
  {path: '**' ,component: DisplayTweetComponent}
];
