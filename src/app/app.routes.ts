import { Routes } from '@angular/router';
import { DisplayTweetComponent } from '../display-tweet/display-tweet.component';

export const routes: Routes = [
  {path: '**' ,component: DisplayTweetComponent}
];
