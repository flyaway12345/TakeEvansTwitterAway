import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { October52024Component } from "./dates/october-5-2024/october-5-2024.component";
import { CommonModule } from '@angular/common';
import { October62024Component } from "./dates/october-6-2024/october-6-2024.component";
import { October122024Component } from "./dates/october-12-2024/october-12-2024.component";
import { November192024Component } from "./dates/november-19-2024/november-19-2024.component";
import { November252024Component } from "./dates/november-25-2024/november-25-2024.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    October52024Component, October62024Component, October122024Component, November192024Component, November252024Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TakeEvansTwitterAway';
  October5Visibility:boolean = false;
  October6Visibility:boolean = false;
  October12Visibility:boolean = false;
  November19Visibility:boolean = false;
  November25Visibility:boolean = false;

  onClickOctober5Visibility(){
    this.October5Visibility = !this.October5Visibility;
    this.October6Visibility = false;
    this.October12Visibility = false;
    this.November19Visibility = false;
    this.November25Visibility = false;
  }
  onClickOctober6Visibility(){
    this.October5Visibility = false;
    this.October6Visibility = !this.October6Visibility;
    this.October12Visibility = false;
    this.November19Visibility = false;
    this.November25Visibility = false;
  }
  onClickOctober12Visibility(){
    this.October5Visibility = false;
    this.October6Visibility = false;
    this.October12Visibility = !this.October12Visibility;
    this.November19Visibility = false;
    this.November25Visibility = false;

  }
  onClickNovember19Visibility(){
    this.October5Visibility = false;
    this.October6Visibility = false;
    this.November19Visibility = !this.November19Visibility;
    this.October12Visibility = false;
    this.November25Visibility = false;
  }
  onClickNovember25Visibility(){
    this.October5Visibility = false;
    this.October6Visibility = false;
    this.November19Visibility = false;
    this.October12Visibility = false;
    this.November25Visibility= !this.November25Visibility;
  }
}
