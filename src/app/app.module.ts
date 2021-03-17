import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [AppComponent, AccordionComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        TranslocoRootModule,
        MatProgressBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
