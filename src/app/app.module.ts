import { EstagiarioService } from './service/estagiario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ListaEstagiarioComponent } from './lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './lista-estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ListaComponent } from './lista-estagiario/lista/lista.component';
import { CadHorarioComponent } from './lista-estagiario/cad-horario/cad-horario.component';
import { OrientadorComponent } from './orientador/orientador.component';
import { CadastroDeEstagiarioComponent } from './orientador/cadastro-de-estagiario/cadastro-de-estagiario.component';
import { VincularEstagioComponent } from './orientador/vincular-estagio/vincular-estagio.component';
import { ListaOrientadorComponent } from './orientador/lista-orientador/lista-orientador.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent,
    ListaComponent,
    CadHorarioComponent,
    OrientadorComponent,
    CadastroDeEstagiarioComponent,
    VincularEstagioComponent,
    ListaOrientadorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EstagiarioService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
