import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsuarioService } from '../../providers/usuario/usuario';
import { CarrinhoService } from '../../providers/carrinho/carrinho';

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  produto:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarrinhoService,
              private _us:UsuarioService
              ) {

    console.log( this.navParams.get("produto") );
    this.produto = this.navParams.get("produto");

  }

  ver_produtos(){
    if( this._us.token )
    {

    } else {

    }
  }

}
