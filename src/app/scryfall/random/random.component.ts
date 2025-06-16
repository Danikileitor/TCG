import { Component, signal, WritableSignal } from '@angular/core';
import { ScryfallRandomService } from './random.service';
import { Card } from '../scryfall-card.interface';
import { ScryfallService } from '../scryfall.service';
import { Datum, ScryfallSymbol } from '../scryfall-symbol.interface';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-scryfall-random',
  imports: [MatChipsModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class ScryfallRandomComponent {
  carta = signal<Card | null>(null)
  simbolos = signal<ScryfallSymbol | null>(null)
  coste = signal<Datum[]>([]);

  constructor(readonly service: ScryfallRandomService, readonly serviceSymbol: ScryfallService) {
    this.getSymbology()
    this.getRandom('es')
  }

  async getRandom(idioma?: string) {
    this.service.getRandom(idioma).subscribe({
      next: (random) => {
        this.carta.set(random)
        this.getCoste()
        console.log(this.carta());
      }
    })
  }

  async getSymbology() {
    this.serviceSymbol.getSymbology().subscribe({
      next: (simbolos) => {
        this.simbolos.set(simbolos)
        console.log(this.simbolos())
      }
    })
  }

  parseCost(cost: string | undefined): string[] {
    if (cost) {
      const regex = /{[^}]+}/g;
      return cost.match(regex) || [];
    } else {
      return new Array()
    }
  }

  getCoste() {
    let mana = this.parseCost(this.carta()?.mana_cost)
    const simbolos = mana.map((mana) => {
      return this.simbolos()?.data?.find((s) => s.symbol === mana);
    });
    this.coste.set(simbolos as Datum[])
  }
}
