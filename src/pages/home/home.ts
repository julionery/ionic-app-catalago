import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ProdutosService} from "../../providers/produtos/produtos";
import {ProdutosPage} from "../produtos/produtos"
import {LoginPage} from "../login/login";
import {CarrinhoService} from  "../../providers/carrinho/carrinho";
import {UsuarioService} from "../../providers/usuario/usuario";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    produtoPage = ProdutosPage;
    loginPage = LoginPage;
    animateClass: any;

    constructor(public navCtrl: NavController,
                private _ps: ProdutosService,
                private _cs: CarrinhoService,
                private _us: UsuarioService) {
        this.animateClass = { 'zoom-in': true };
    }

    nextPage( infiniteScroll )
    {
        this._ps.listar_todos()
            .then( ()=>{
                infiniteScroll.complete();
            } )
    }

    onItemClick = (item:any): any => {
        this.navCtrl.push(this.produtoPage, {
            produto: item
        });
    }
}
