import { Component, signal } from '@angular/core';
import { ScryfallService } from './scryfall.service';
import { Card } from './scryfall-card.interface';

@Component({
  selector: 'app-scryfall',
  imports: [],
  templateUrl: './scryfall.component.html',
  styleUrl: './scryfall.component.scss'
})
export class ScryfallComponent {
  carta = signal<Card | null>(null)

  constructor(private readonly service: ScryfallService) {
    this.getRandom('es')
  }

  async getRandom(idioma?: string) {
    this.service.getRandom(idioma).subscribe({
      next: (random) => {
        this.carta.set(random)
        console.log(random);

      }
    })
  }
}
