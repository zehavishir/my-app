import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleJobHuntingComponent } from './component/single-job-hunting.component';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  declarations: [SingleJobHuntingComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [SingleJobHuntingComponent]
})
export class SingleJobHuntingModule { }
