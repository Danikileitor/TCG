import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScryfallComponent } from "./scryfall/scryfall.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScryfallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dnktcg';
}
