import { Pipe, PipeTransform } from '@angular/core';
import { ScryfallSymbol } from '../scryfall/scryfall-symbol.interface';

@Pipe({
    name: 'simboloPipe'
})
export class SimboloPipe implements PipeTransform {
    transform(value: string | null | undefined, simbolos: ScryfallSymbol | null): string {
        if (value === null || value === undefined) {
            return '';
        }
        if (simbolos === null) {
            return value;
        }
        const regex = /\{(.*?)\}/g;
        const simbolo = simbolos.data.reduce((acc: { [key: string]: string }, symbol) => {
            acc[symbol.symbol] = symbol.svg_uri;
            return acc;
        }, {});
        return value.replace(regex, (match, symbol) => {
            const url = simbolo[`{${symbol}}`] || '';
            return `<img class="simbolos" src="${url}" alt="${symbol}">`;
        });
    }
}
