import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';

@Component({
    selector: 'appearance-animation-layout-2',
    templateUrl: 'appearance-animation.html'
})

export class AppearanceAnimationLayout2 implements AfterViewInit {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    animateItems = [];
    animateClass: any;

    constructor() {
        this.animateClass = { 'fade-in-right-item': true };
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngAfterViewInit() {
        let that = this;
        for (let i = 0; i < that.data.items.length; i++) {
            setTimeout(function () {
                that.animateItems.push(that.data.items[i]);
            }, 200 * i);
        }
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }
}
