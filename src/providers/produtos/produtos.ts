import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

import {URL_SERVICOS} from '../../config/url.servicos';

@Injectable()
export class ProdutosService {

    _token: string = "";

    pagina: number = 1;
    paginaCategoria: number = 1;
    paginaPorCategoria: number = 1;
    paginaBusca: number = 1;
    //produtos: any[] = [[], []];
    produtos: any[] = [];
    categorias: any[] = [];
    por_categoria: any[] = [];

    resltados_busca:any[] = [];

    constructor(public http: Http) {
        this.listar_todos();
        this.listar_categorias();
    }

    listar_todos() {

        let promise = new Promise((resolve, reject) => {

            let url = URL_SERVICOS + "produtos?page=" + this.pagina + this._token;

            this.http.get(url)
                .map(resp => resp.json())
                .subscribe(data => {
                    console.log("Produtos: ");
                    console.log(data.result.data);
                    if (data.error) {
                        // aqui tem um problema
                    } else {

                        //let novoResult = this.agrupar(data.result.data, 2);
                        let that = this;
                        for (let i = 0; i < data.result.data.length; i++) {
                            setTimeout(function () {
                                that.produtos.push(data.result.data[i]);
                            }, 200 * i);
                        }

                        //this.produtos.push(...data.result.data);
                        this.pagina += 1;
                    }
                    resolve();
                })
        });
        return promise;
    }

    private agrupar(arr: any, tamanho: number) {
        let novoArray = [];
        for (let i = 0; i < arr.length; i += tamanho) {
            novoArray.push(arr.slice(i, i + tamanho))
        }
        console.log(novoArray);
        return novoArray;
    }

    listar_categorias() {
        let promise = new Promise((resolve, reject) => {
            let url = URL_SERVICOS + "categoria?page=" + this.paginaCategoria + this._token;
            this.http.get(url)
                .map(resp => resp.json())
                .subscribe(data => {
                    console.log("Categorias: ");
                    console.log(data.result.data);
                    if (data.error) {
                        //problemas
                    } else {

                        let that = this;
                        for (let i = 0; i < data.result.data.length; i++) {
                            setTimeout(function () {
                                that.categorias.push(data.result.data[i]);
                            }, 200 * i);
                        }
                        //this.categorias.push(...data.result.data);
                        this.paginaCategoria += 1;
                    }
                    resolve();
                })
        });
        return promise;
    }

    listar_por_categoria( categoria_id:number)
    {
        let promise = new Promise((resolve, reject) => {
            let url = URL_SERVICOS + "produtos/category?categoria_id="+categoria_id+"&page=" + this.paginaPorCategoria + this._token;
            this.http.get(url)
                .map(resp => resp.json())
                .subscribe(data => {
                    console.log("Produtos por Categorias: ");
                    console.log(data.result.data);
                    if (data.error) {
                        //problemas
                    } else {

                        let that = this;
                        for (let i = 0; i < data.result.data.length; i++) {
                            setTimeout(function () {
                                that.por_categoria.push(data.result.data[i]);
                            }, 200 * i);
                        }
                        //this.categorias.push(...data.result.data);
                        this.paginaPorCategoria += 1;
                    }
                    resolve();
                })
        });
        return promise;
    }

    buscar_produtos( key:string){
        if( key.trim() != ""){
        let url = URL_SERVICOS + "produtos/search?key-search="+key;
        this.http.get(url)
            .subscribe(resp => {
                let data = resp.json();
                this.resltados_busca = data.result.data;
            })
        }else {
            this.resltados_busca = [];
        }
    }
}
