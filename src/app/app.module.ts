import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [AppComponent, AccordionComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatExpansionModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
