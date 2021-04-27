import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//service
import { ParaPunto3Service } from './services/para-punto3.service';
///



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from "@angular/forms"
import { from } from 'rxjs';
import { Punto2Component } from './components/punto2/punto2.component';
import { NgxDataTableModule } from 'angular-9-datatable';
import { Punto3Component } from './components/punto3/punto3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    FooterComponent,
    Punto2Component,
    Punto3Component,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [ParaPunto3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
