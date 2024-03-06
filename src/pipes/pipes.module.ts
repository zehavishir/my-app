import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { SymbolsConverterPipe } from './symbols-converter.pipe';


@NgModule({
  declarations: [CurrencyConverterPipe, SymbolsConverterPipe],
  imports: [
    CommonModule
  ],
  exports: [CurrencyConverterPipe, SymbolsConverterPipe]
})
export class PipesModule { }
