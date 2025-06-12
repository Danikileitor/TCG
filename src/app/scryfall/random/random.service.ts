import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../scryfall-card.interface';

@Injectable({
  providedIn: 'root'
})
export class ScryfallRandomService {

  constructor(private readonly httpclient: HttpClient) {

  }

  getRandom(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/random?q=lang:' + idioma)
    } else {
      return this.httpclient.get<Card>('https://api.scryfall.com/cards/random')
    }
  }
}
