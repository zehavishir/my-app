import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
// import { SingleJobHuntingComponent } from 'src/shared/single-job-hunting/component/single-job-hunting.component';
// import { SingleJobHuntingModule } from 'src/shared/single-job-hunting/single-job-hunting.module';
import { PipesModule } from 'src/pipes/pipes.module';
// import { MainWindowHeaderComponent } from 'src/main-window/layout/main-window-header/main-window-header.component';
// import { MainWindowSidebarComponent } from 'src/main-window/layout/main-window-sidebar/main-window-sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainWindowModule } from 'src/main-window/main-window.module';
@NgModule({
  declarations: [
    AppComponent,
    // MainWindowHeaderComponent,
    // MainWindowSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MainWindowModule,
    // SingleJobHuntingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
