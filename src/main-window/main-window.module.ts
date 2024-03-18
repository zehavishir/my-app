import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWindowHeaderComponent } from './layout/main-window-header/main-window-header.component';
import { MainWindowSidebarComponent } from './layout/main-window-sidebar/main-window-sidebar.component';
import { MainWindowComponent } from './main-window.component';
import { SingleJobHuntingModule } from 'src/shared/single-job-hunting/single-job-hunting.module';
@NgModule({
  declarations: [MainWindowHeaderComponent,MainWindowSidebarComponent, MainWindowComponent],
  imports: [
    CommonModule,
    SingleJobHuntingModule
  ],
  exports:[MainWindowComponent]
})
export class MainWindowModule { }
