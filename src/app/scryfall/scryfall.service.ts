import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallSymbol } from './scryfall-symbol.interface';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor(private readonly httpclient: HttpClient) {

  }

  getSymbology() {
    return this.httpclient.get<ScryfallSymbol>('https://api.scryfall.com/symbology')
  }
}