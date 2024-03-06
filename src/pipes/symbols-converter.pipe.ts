import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbolsConverter'
})
export class SymbolsConverterPipe implements PipeTransform {

  transform(value: string, args: string): string {
    switch (args){
      case '&':
        return value.replace(args,'&');
      case '&#038;':
        return value.replace(args,'&');
      default:
        return '';
    }
  }

}
