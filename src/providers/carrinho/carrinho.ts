import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {AlertController, Platform, ModalController} from "ionic-angular"

// Plugin sotrage
import { Storage } from '@ionic/storage';

// Usuário Service
import { UsuarioService } from '../usuario/usuario';

// Paginas do Modal
import { LoginPage, CarrinhoPage, BuscaPage } from '../../pages/index.paginas'


@Injectable()
export class CarrinhoService {

    items: any[] = [];
    total_carrinho:number = 0;

    constructor(public http: Http,
                private alertCtrl: AlertController,
                private modalCtrl: ModalController,
                private platform: Platform,
                private storage: Storage,
                private _us: UsuarioService) {

        this.buscar_storage();
        this.atualizar_total();
    }

    add_carrinho(item_parametro: any) {
        for (let item of this.items) {
            if (item.id == item_parametro.id) {
                this.alertCtrl.create({
                    title:"<p style='color: red'>Item Existe! </p>",
                    subTitle: "<br />"+ item_parametro.nome.toUpperCase() + ", já se encontra na cesta!",
                    buttons: ["OK"]
                }).present();
                return;
            }
        }
        this.items.push(item_parametro);
        this.atualizar_total();
        this.salvar_storage();

        this.alertCtrl.create({
            title:"Sucesso!",
            subTitle: "<br />"+ item_parametro.nome.toUpperCase() + ", adicionado com sucesso!",
            buttons: ["OK"]
        }).present();

    }

    atualizar_total(){
        this.total_carrinho = 0;
        for ( let item of this.items){
            this.total_carrinho += Number( item.preco);
        }
    }

    private salvar_storage(){
        if(this.platform.is("cordova"))
        {
            // dispositivo
            this.storage.set('items', this.items);
        }else{
            // computador
            localStorage.setItem("items", JSON.stringify( this.items ) );
        }
    }

    remover_item( idx:number )
    {
        this.items.splice(idx, 1);
        this.salvar_storage();
    }
    concluir_item( idx:number )
    {
        console.log("marcar item")
    }

    buscar_storage(){

        let promise = new Promise( ( resolve, reject) => {
            if(this.platform.is("cordova"))
            {
                // dispositivo
                this.storage.ready()
                    .then(() => {
                        this.storage.get('items')
                            .then( items => {
                                if( items ){
                                    this.items = items;
                                }
                                resolve();
                        });
                    })
            }else{
                // computador
                if( localStorage.getItem("items") ){
                    // Existe item no localStorage
                    this.items = JSON.parse( localStorage.getItem("items") );
                }
                resolve();
            }
        });
       return promise;
    }

    ver_carrinho(){

        let modal:any;

        if( this._us.token ){
            modal = this.modalCtrl.create( CarrinhoPage );
        }else{
            modal = this.modalCtrl.create( LoginPage );
        }

        modal.present();

        modal.onDidDismiss( (abrirCarrinho:boolean) => {
            if( abrirCarrinho ){
                this.modalCtrl.create( CarrinhoPage ).present();
            }
        })
    }

    ver_busca(){

        let modal:any;
        modal = this.modalCtrl.create( BuscaPage );
        modal.present();
        modal.onDidDismiss( (abrirCarrinho:boolean) => {
            if( abrirCarrinho ){
                this.modalCtrl.create( BuscaPage ).present();
            }
        })
    }

}
