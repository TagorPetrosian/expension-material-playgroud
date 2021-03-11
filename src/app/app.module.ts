import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [AppComponent, AccordionComponent, AccordionItemComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatExpansionModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
