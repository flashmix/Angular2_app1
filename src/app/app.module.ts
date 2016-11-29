import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AutsComponent } from './auts/auts.component';
import { KursComponent } from './kurs/kurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AutsComponent,
    KursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }