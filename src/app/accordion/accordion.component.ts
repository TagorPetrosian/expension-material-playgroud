import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
interface AccordionItem {
    title: string;
    content: string;
}
@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit {
    public items: AccordionItem[] = [
        {
            title: 'Get Truffles, Get Rich',
            content: `<html lang="en">
            <body>
              <p>
                On TruffleLive, you can make real money by earning Truffles – our in-app currency. The Truffles you earn can be
                redeemed for cash. There are three approaches Talents use to earn their Truffles:
              </p>
              <ol>
                <li>Charge your followers and clients for your services and content</li>
                <li>Your fans and potential clients voluntary give you tips and virtual gifts</li>
                <li>
                  By referring people to TruffleLive and sharing live content, you automatically enter the Truffle cash program.
                </li>
              </ol>
              <p>You can earn Truffles on TruffleLive use any of these 4 features. Tap each one to learn how it’s done:</p>
              <ul>
                <li><a href="#">Live Streams</a></li>
                <li><a href="#">Upload pre-made videos</a></li>
                <li><a href="#">Chat, groups, and channels</a></li>
                <li><a href="#">Truffle Cash Referral Program</a></li>
              </ul>
            </body>
          </html>`,
        },
        {
            title: 'title2',
            content: `<html lang="en">
            <body>
              <p>
                On TruffleLive, you can make real money by earning Truffles – our in-app currency. The Truffles you earn can be
                redeemed for cash. There are three approaches Talents use to earn their Truffles:
              </p>
              <ol>
                <li>Charge your followers and clients for your services and content</li>
                <li>Your fans and potential clients voluntary give you tips and virtual gifts</li>
                <li>
                  By referring people to TruffleLive and sharing live content, you automatically enter the Truffle cash program.
                </li>
              </ol>
              <p>You can earn Truffles on TruffleLive use any of these 4 features. Tap each one to learn how it’s done:</p>
              <ul>
                <li><a href="#">Live Streams</a></li>
                <li><a href="#">Upload pre-made videos</a></li>
                <li><a href="#">Chat, groups, and channels</a></li>
                <li><a href="#">Truffle Cash Referral Program</a></li>
              </ul>
            </body>
          </html>`,
        },
        {
            title: 'title3',
            content: `<html lang="en">
            <body>
              <p>
                On TruffleLive, you can make real money by earning Truffles – our in-app currency. The Truffles you earn can be
                redeemed for cash. There are three approaches Talents use to earn their Truffles:
              </p>
              <ol>
                <li>Charge your followers and clients for your services and content</li>
                <li>Your fans and potential clients voluntary give you tips and virtual gifts</li>
                <li>
                  By referring people to TruffleLive and sharing live content, you automatically enter the Truffle cash program.
                </li>
              </ol>
              <p>You can earn Truffles on TruffleLive use any of these 4 features. Tap each one to learn how it’s done:</p>
              <ul>
                <li><a href="#">Live Streams</a></li>
                <li><a href="#">Upload pre-made videos</a></li>
                <li><a href="#">Chat, groups, and channels</a></li>
                <li><a href="#">Truffle Cash Referral Program</a></li>
              </ul>
            </body>
          </html>`,
        },
    ];
    constructor(private viewContainer: ViewContainerRef) {}

    ngOnInit(): void {}
}
