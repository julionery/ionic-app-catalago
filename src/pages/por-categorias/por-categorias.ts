import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ProdutosService} from "../../providers/produtos/produtos";
import {ProdutosPage} from "../produtos/produtos";
import {CarrinhoService} from  "../../providers/carrinho/carrinho";

@Component({
    selector: 'page-por-categorias',
    templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {

    produtoPage = ProdutosPage;
    categoria: any = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private _ps: ProdutosService,
                private _cs: CarrinhoService) {
        this.categoria = this.navParams.get("categoria");
        this._ps.listar_por_categoria(this.categoria.id);
    }

    nextPage(infiniteScroll) {
        this._ps.listar_por_categoria(this.categoria.id)
            .then(() => {
                infiniteScroll.complete();
            })
    }

    onItemClick = (item: any): any => {
        this.navCtrl.push(this.produtoPage, {
            produto: item
        });
    }

}
