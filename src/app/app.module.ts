import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { MarketlistComponent } from './modules/home/components/marketlist/marketlist.component';
import { MarketlistInputAddItensComponent } from './modules/home/components/marketlist-input-add-itens/marketlist-input-add-itens.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { MarketlistButtonDeleteAllComponent } from './modules/home/components/marketlist-button-delete-all/marketlist-button-delete-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketlistComponent,
    MarketlistInputAddItensComponent,
    HeaderComponent,
    MarketlistButtonDeleteAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
