import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PessoaService } from './services/pessoa.service';
import { ConfigService } from './services/config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './../app.route';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
