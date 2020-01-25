import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ProdutosService} from "../../providers/produtos/produtos";
import {PorCategoriasPage} from "../index.paginas";
import {CarrinhoService} from  "../../providers/carrinho/carrinho";

@Component({
    selector: 'page-categorias',
    templateUrl: 'categorias.html',
})
export class CategoriasPage {

    animateClass: any;
    porCategoria = PorCategoriasPage;

    constructor(public navCtrl: NavController,
                navParams: NavParams,
                public _ps: ProdutosService,
                private _cs: CarrinhoService) {
        this.animateClass = {'fade-in-item': true};
    }

    onItemClick = (categoria: any): any => {
        this.navCtrl.push(this.porCategoria, {
            categoria: categoria
        });
    }

    nextPage(infiniteScroll) {
        this._ps.listar_categorias()
            .then(() => {
                infiniteScroll.complete();
            })
    }
}
