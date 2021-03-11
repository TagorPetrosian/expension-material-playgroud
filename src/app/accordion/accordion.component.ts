import { Component, OnInit } from '@angular/core';
interface AccordionItem {
    title: string;
    content: string;
}
@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
    public items: AccordionItem[] = [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' },
        { title: 'title2', content: 'content3' },
    ];
    constructor() {}

    ngOnInit(): void {}
}
