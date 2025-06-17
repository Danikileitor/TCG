import { Component, signal, WritableSignal } from '@angular/core';
import { Card, CardFace } from '../scryfall-card.interface';
import { ScryfallService } from '../scryfall.service';
import { Datum, ScryfallSymbol } from '../scryfall-symbol.interface';
import { MatChipsModule } from '@angular/material/chips';
import { RecordatoriosPipe } from '../../pipes/recordatorios.pipe';
import { SimboloPipe } from '../../pipes/simbolo.pipe';

@Component({
  selector: 'app-scryfall-random',
  imports: [MatChipsModule, RecordatoriosPipe, SimboloPipe],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss'
})
export class ScryfallRandomComponent {
  simbolos = signal<ScryfallSymbol | null>(null)
  carta = signal<Card | null>(null)
  coste = signal<Datum[]>([])
  coste2 = signal<Datum[]>([])
  identidad = signal<Datum[]>([])
  legalidades = signal<String[][]>([])
  caras = signal<CardFace[]>([])
  mostrarCaraFrontal = true

  constructor(readonly service: ScryfallService) {
    this.getSymbology()
    this.getRandom('es')
  }

  async getSymbology() {
    this.service.getSymbology().subscribe({
      next: (simbolos) => {
        this.simbolos.set(simbolos)
      }
    })
  }

  async getRandom(idioma?: string) {
    this.service.getRandomAdventure(idioma).subscribe({
      next: (carta) => {
        this.carta.set(carta)
        if (typeof carta.card_faces !== 'undefined') {
          this.caras.set(carta.card_faces)
          if (typeof carta.card_faces[0].image_uris !== 'undefined') {
            this.getCoste(carta.card_faces[0].mana_cost)
            this.getCoste2(carta.card_faces[1].mana_cost)
          } else if (carta.layout === 'adventure') {
            this.getCoste(carta.card_faces[0].mana_cost)
            this.getCoste2(carta.card_faces[1].mana_cost)
          } else {
            this.getCoste(carta.mana_cost)
          }
        } else {
          this.getCoste(carta.mana_cost)
        }
        this.getIdentidad(carta.color_identity)
        this.legalidades.set(Object.entries(carta.legalities))
        console.log(this.carta())
      }
    })
  }

  parseCost(cost: string): string[] {
    if (cost) {
      const regex = /{[^}]+}/g
      return cost.match(regex) || []
    } else {
      return new Array()
    }
  }

  getCoste(cost: string) {
    let mana = this.parseCost(cost)
    const simbolos = mana.map((mana) => {
      return this.simbolos()?.data?.find((s) => s.symbol === mana)
    })
    this.coste.set(simbolos as Datum[])
  }

  getCoste2(cost: string) {
    let mana = this.parseCost(cost)
    const simbolos = mana.map((mana) => {
      return this.simbolos()?.data?.find((s) => s.symbol === mana)
    })
    this.coste2.set(simbolos as Datum[])
  }

  getIdentidad(colores: String[]) {
    const simbolos = colores.length > 0 ? colores.map((color) => {
      return this.simbolos()?.data?.find((s) => s.symbol == '{' + color + '}')
    }) : new Array(this.simbolos()?.data?.find((s) => s.symbol == '{C}'))
    this.identidad.set(simbolos as Datum[])
  }

  voltear() {
    if (this.caras()) {
      this.mostrarCaraFrontal = !this.mostrarCaraFrontal;
    }
  }
}
