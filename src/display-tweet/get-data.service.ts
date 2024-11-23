import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  uri:string = "https://raw.githubusercontent.com/flyaway12345/TakeEvansTwitterAway/refs/heads/main/src/display-tweet/tweets.json";
  constructor(private http: HttpClient) { }

  public getData() : Observable<any> {
   return this.http.get(this.uri).pipe(map( (data: any) => data.filter( (res:any) => res.id != 0)));;
  }
}
