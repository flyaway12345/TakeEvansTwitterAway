import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { October52024Component } from "./october-5-2024/october-5-2024.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
     HeaderComponent,
      FooterComponent,
       October52024Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TakeEvansTwitterAway';
  LandingVisibility:boolean = true;
  October5Visibility:boolean = false;

  onClickOctober5Visibility(){
    this.LandingVisibility = !this.LandingVisibility;
    this.October5Visibility = !this.October5Visibility;

  }

}
