import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'recordatoriosPipe'
})
export class RecordatoriosPipe implements PipeTransform {
    transform(value: string): string {
        const regex = /\((.*?)\)/g;
        return value.replace(regex, "<span class='cursiva'>($1)</span>");
    }
}
