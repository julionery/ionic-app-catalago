import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Pipes
import { ImagemPipe } from "../pipes/imagem/imagem";

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Serviços
import { CarrinhoService, UsuarioService, ProdutosService } from "../providers/index.services"

// Paginas
import { CarrinhoPage, CategoriasPage, LoginPage, PorCategoriasPage, TabsPage, ProdutosPage, BuscaPage} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    ImagemPipe,
    HomePage,
    CarrinhoPage,
    CategoriasPage,
    LoginPage,
    PorCategoriasPage,
    TabsPage,
    ProdutosPage,
    BuscaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarrinhoPage,
    CategoriasPage,
    LoginPage,
    PorCategoriasPage,
    TabsPage,
    ProdutosPage,
    BuscaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosService,
    UsuarioService,
    CarrinhoService,
  ]
})
export class AppModule {}
