import {Component} from '@angular/core';

import {HomePage, CategoriasPage, CarrinhoPage, BuscaPage} from "../index.paginas";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    tabHome = HomePage;
    tabCategoria = CategoriasPage;
    tabCarrinho = CarrinhoPage;
    tabBusca = BuscaPage;
}
