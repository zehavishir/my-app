import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { SingleJobHuntingComponent } from 'src/shared/single-job-hunting/single-job-hunting.component';
import { PipesModule } from 'src/pipes/pipes.module';
import { MainWindowHeaderComponent } from 'src/main-window-header/main-window-header.component';
@NgModule({
  declarations: [
    AppComponent,
    SingleJobHuntingComponent,
    MainWindowHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
