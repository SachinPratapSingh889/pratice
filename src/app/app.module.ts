import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponent } from './newcomp/new/new.component';
import { shortCode } from './custom.pipe';
import {BioDataService} from './bio-data.service'



@NgModule({
  declarations: [
    AppComponent ,
    shortCode,
   NewComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [BioDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
