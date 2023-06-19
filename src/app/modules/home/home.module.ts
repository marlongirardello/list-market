//Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketlistButtonDeleteAllComponent } from './components/marketlist-button-delete-all/marketlist-button-delete-all.component';
import { HeaderComponent } from './components/header/header.component';
import { MarketlistInputAddItensComponent } from './components/marketlist-input-add-itens/marketlist-input-add-itens.component';
import { MarketlistComponent } from './components/marketlist/marketlist.component';


//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    MarketlistButtonDeleteAllComponent,
    HeaderComponent,
    MarketlistInputAddItensComponent,
    MarketlistComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
  
}
