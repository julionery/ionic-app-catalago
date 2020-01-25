import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, reorderArray} from 'ionic-angular';
import {CarrinhoService} from "../../providers/carrinho/carrinho";

@Component({
    selector: 'page-carrinho',
    templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private viewCtrl: ViewController,
                private _cs: CarrinhoService) {
    }

    reorderItems = (indexes): void => {
        this._cs.items = reorderArray(this._cs.items, indexes);
    }

}
