import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CampingComponent } from './camping/camping.component';
import { CampingInvoerComponent } from './campinginvoer/campinginvoer.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app.routing';
import { ChildService } from './child/child.service';
import { Child2Component } from './child2/child2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CampingComponent,
    CampingInvoerComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
