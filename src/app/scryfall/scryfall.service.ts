import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './scryfall-card.interface';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor(private readonly httpclient: HttpClient) {

  }

  getRandom() {
    return this.httpclient.get<Card>('https://api.scryfall.com/cards/random')
  }
}
