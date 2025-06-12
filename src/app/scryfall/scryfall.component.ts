import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-scryfall',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './scryfall.component.html',
  styleUrl: './scryfall.component.scss'
})
export class ScryfallComponent {
}
