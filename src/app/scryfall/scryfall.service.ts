import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor(private readonly httpclient: HttpClient) {

  }

  getSymbology() {
    return this.httpclient.get<Symbol>('https://api.scryfall.com/symbology')
  }
}