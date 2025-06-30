import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallSymbol } from './scryfall-symbology.interface';
import { ScryfallCard } from './scryfall-card.interface';
import { ScryfallSet } from './scryfall-set.interface';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor(private readonly httpclient: HttpClient) { }

  getSymbology() {
    return this.httpclient.get<ScryfallSymbol>('https://api.scryfall.com/symbology')
  }

  getSet(id: string) {
    return this.httpclient.get<ScryfallSet>('https://api.scryfall.com/sets/' + id)
  }

  getCartaById(id: string) {
    return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/' + id)
  }

  getCarta(set: string, num: number, idioma?: string) {
    if (idioma) {
      return this.httpclient.get<ScryfallCard>(`https://api.scryfall.com/cards/${set}/${num}/${idioma}`)
    } else {
      return this.httpclient.get<ScryfallCard>(`https://api.scryfall.com/cards/${set}/${num}`)
    }
  }

  async getSetReprints(set: string, name: string) {
    const response = await firstValueFrom(this.httpclient.get<any>(`https://api.scryfall.com/cards/search?q=!"${name}"+set:${set}+lang:any+unique:prints`))
    return response.data
  }

  getRandom(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/random?q=lang:' + idioma)
    } else {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/random')
    }
  }

  getRandomAdventure(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/random?q=type:adventure+lang:' + idioma)
    } else {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/random?q=type:adventure')
    }
  }

  getCaras(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/mid/165/' + idioma)
    } else {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/mid/165')
    }
  }

  getDoble(idioma?: string) {
    if (idioma) {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/dis/153/' + idioma)
    } else {
      return this.httpclient.get<ScryfallCard>('https://api.scryfall.com/cards/dis/153')
    }
  }
}