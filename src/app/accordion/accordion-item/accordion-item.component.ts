import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-accordion-item',
    templateUrl: './accordion-item.component.html',
    styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent implements OnInit {
    @Input() title: string;
    @Input() content: any;
    constructor() {}

    ngOnInit(): void {}
}
