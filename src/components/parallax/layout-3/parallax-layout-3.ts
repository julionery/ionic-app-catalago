import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';

@Component({
    selector: 'parallax-layout-3',
    templateUrl: 'parallax.html'
})

export class ParallaxLayout3 implements AfterViewInit {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    constructor() { }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }
}
