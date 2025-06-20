import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayConBarrasPipe'
})
export class ArrayConBarras implements PipeTransform {

    private mapeo = [
        { valor: 'nonfoil', texto: 'Nonfoil' },
        { valor: 'foil', texto: 'Foil' },
        { valor: 'etched', texto: 'Etched' }
    ]

    transform(value: string[]): string {
        if (!value) return ''

        return value.map(v => {
            const encontrado = this.mapeo.find(m => m.valor === v.toLowerCase())
            return encontrado ? encontrado.texto : v
        }).join('/')
    }
}