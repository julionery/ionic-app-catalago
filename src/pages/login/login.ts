import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {UsuarioService} from '../../providers/usuario/usuario';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string = "";
    password: string = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private viewCtrl: ViewController,
                private _us: UsuarioService) {

    }

    entrar(){
        this._us.entrar( this.email, this.password )
            .subscribe( ()=>{
                if( this._us.ativo() ){
                    this.viewCtrl.dismiss(true);

                }
            } )
    }

}
