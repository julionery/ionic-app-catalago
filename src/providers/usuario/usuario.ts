import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

import {URL_SERVICOS} from '../../config/url.servicos';
import {AlertController, Platform} from "ionic-angular";

// Plugin sotrage
import {Storage} from '@ionic/storage';

@Injectable()
export class UsuarioService {

    token: string;
    user_id: string;

    constructor(public http: Http,
                private alertCtrl: AlertController,
                private platform: Platform,
                private storage: Storage) {
            this.carregar_storage();
    }

    ativo():boolean{
        if( this.token ){
            return true;
        }else{
            return false;
        }
    }

    entrar(email: string, password: string) {

        let data = new URLSearchParams();

        data.append("email", email);
        data.append("password", password);

        let url = URL_SERVICOS + "auth";

        return this.http.post(url, data)
            .map(resp => {
                let data_resp = resp.json();
                console.log(data_resp);

                if (data_resp.error) {
                    this.alertCtrl.create({
                        title: "Ooopps!",
                        subTitle: "Houve alguns problemas com sua entrada! <br /><br />" + data_resp.message,
                        buttons: ["OK"]
                    }).present();
                } else {
                    this.token = data_resp.token;
                    this.user_id = data_resp.user_id;

                    // Salvar no Storage
                    this.salvar_storage();
                }
            })
    }

    sair() {

        this.token = null;
        this.user_id = null;

        // Salvar no Storage
        this.salvar_storage();
    }

    private salvar_storage() {
        if (this.platform.is("cordova")) {
            // dispositivo
            this.storage.set('token', this.token);
            this.storage.set('user_id', this.user_id);
        } else {
            // computador
            if( this.token ){
                localStorage.setItem("token", this.token);
                localStorage.setItem("user_id", this.user_id);
            }else{
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
            }


        }
    }

    carregar_storage() {

        let promise = new Promise((resolve, reject) => {
            if (this.platform.is("cordova")) {
                // dispositivo
                this.storage.ready()
                    .then(() => {
                        this.storage.get('token')
                            .then(token => {
                                if (token) {
                                    this.token = token;
                                }
                                resolve();
                            });

                        this.storage.get('user_id')
                            .then(user_id => {
                                if (user_id) {
                                    this.user_id = user_id;
                                }
                                resolve();
                            });
                    })
            } else {
                // computador
                if (localStorage.getItem("token")) {
                    // Existe item no localStorage
                    this.token = localStorage.getItem("token");
                    this.user_id = localStorage.getItem("user_id");
                }
                resolve();
            }
        });
        return promise;
    }
}
