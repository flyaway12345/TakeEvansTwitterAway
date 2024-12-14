import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { October52024Component } from "./october-5-2024/october-5-2024.component";
import { CommonModule } from '@angular/common';
import { October62024Component } from "./october-6-2024/october-6-2024.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    October52024Component, October62024Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TakeEvansTwitterAway';
  October5Visibility:boolean = false;
  October6Visibility:boolean = false;
  onClickOctober5Visibility(){
    this.October5Visibility = !this.October5Visibility;
    this.October6Visibility = false;
  }
  onClickOctober6Visibility(){
    this.October5Visibility = false;
    this.October6Visibility = !this.October6Visibility;
  }
}
