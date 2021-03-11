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
        {
            title: 'title1',
            content:
                'Aute sunt duis magna incididunt consequat magna nisi non eu proident reprehenderit nostrud voluptate. Nulla ad veniam laboris ea esse aliquip consequat irure amet sit. In reprehenderit enim ad deserunt veniam duis culpa ex Lorem exercitation mollit veniam aute labore. Culpa dolor ea ea ea ipsum do do in officia nulla nostrud. Aute magna enim commodo nostrud. Amet eiusmod ex Lorem incididunt. Eu et sit aute tempor do occaecat.',
        },
        {
            title: 'title2',
            content:
                'Commodo veniam sint laboris magna ut. Reprehenderit ad voluptate occaecat velit. Nisi Lorem Lorem irure cupidatat ullamco. Nostrud voluptate aliquip labore anim do. Velit aliqua in officia nostrud laborum. Aliqua minim pariatur cillum Lorem mollit consectetur mollit deserunt nostrud exercitation velit do quis labore. Commodo ea anim irure dolore sint nulla.',
        },
        {
            title: 'title2',
            content:
                'Adipisicing in in dolor tempor Lorem et culpa ut cupidatat voluptate ut nisi. Irure cupidatat aute aliqua magna qui aliqua dolor sint ad eiusmod sunt. Magna proident fugiat irure consequat laboris exercitation. Excepteur aliquip dolore cillum occaecat magna est Lorem cupidatat esse. Consequat tempor excepteur pariatur voluptate proident incididunt deserunt non.',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
