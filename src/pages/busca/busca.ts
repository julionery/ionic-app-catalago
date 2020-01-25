import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ProdutosService} from "../../providers/produtos/produtos";

import { CarrinhoService } from '../../providers/carrinho/carrinho';

@Component({
    selector: 'page-busca',
    templateUrl: 'busca.html',
})
export class BuscaPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private viewCtrl: ViewController,
                private _ps: ProdutosService,
                private _cs: CarrinhoService) {
    }

    buscar_produtos(event: any){
        let valor = event.target.value;

        if(valor){
            this._ps.buscar_produtos( valor );
        }
    };

    /*
    getItems(event: any):void {
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter((item) => {
            return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }

    onEvent(event:string, item:any) {//ITEM [EVENT OR SELECTED ITEM]
        if (this.events[event]) {
            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
            } else {
                this.events[event](item);
            }
        }
        console.log(event);
    }
    */
}
