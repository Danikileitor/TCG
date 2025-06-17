import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallSymbol } from './scryfall-symbol.interface';
import { Card } from './scryfall-card.interface';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor(private readonly httpclient: HttpClient) {

  }

  getSymbology() {
    return this.httpclient.get<ScryfallSymbol>('https://api.scryfall.com/symbology')
  }

  getRandom(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/random?q=lang:' + idioma)
    } else {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/random')
    }
  }

  getCaras(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/mid/165/' + idioma)
    } else {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/mid/165')
    }
  }

  getDoble(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/dis/153/' + idioma)
    } else {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/dis/153')
    }
  }
}