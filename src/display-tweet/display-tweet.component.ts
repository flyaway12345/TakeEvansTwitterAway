import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-display-tweet',
  standalone: true,
  imports: [],
  templateUrl: './display-tweet.component.html',
  styleUrl: './display-tweet.component.css'
})
export class DisplayTweetComponent {
   tweetArray:string[] = [];
   tweetList: Array<any> = [];
   constructor(private getDataService: GetDataService) { }

   public baseData() {
    this.getDataService.getData().subscribe(res => {
      this.tweetList = res;
      console.log("data aquired");
    });
  }

  ngOnInit(): void {
    
  }
}
