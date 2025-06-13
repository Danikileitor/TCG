import { Component, signal } from '@angular/core';
import { ScryfallRandomService } from './random.service';
import { Card } from '../scryfall-card.interface';

@Component({
  selector: 'app-scryfall-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class ScryfallRandomComponent {
  carta = signal<Card | null>(null)

  constructor(private readonly service: ScryfallRandomService) {
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
