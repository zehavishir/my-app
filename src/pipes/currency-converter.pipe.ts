import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: string): string {
   switch(value){
    case 'USD':
      return "\u0024";
    case 'CAD':
      return "\u0024";
    default:
      return '';
   }
  }

}
