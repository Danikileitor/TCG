import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ScryfallService } from './scryfall.service';

@Component({
  selector: 'app-scryfall',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './scryfall.component.html',
  styleUrl: './scryfall.component.scss'
})
export class ScryfallComponent {
  symbol = signal<Symbol | null>(null)

  constructor(private readonly service: ScryfallService) {
    this.getSymbology()
  }

  async getSymbology() {
    this.service.getSymbology().subscribe({
      next: (symbol) => {
        this.symbol.set(symbol)
      }
    })
  }
}
