import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marketlist-input-add-itens',
  templateUrl: './marketlist-input-add-itens.component.html',
  styleUrls: ['./marketlist-input-add-itens.component.scss']
})
export class MarketlistInputAddItensComponent {

  @Output() public emitItemMarketList = new EventEmitter();

  public addItemMarketList:string = "";
  constructor() { }

  public submitItemMarketList() {

    this.addItemMarketList = this.addItemMarketList.trim();
    if(this.addItemMarketList) {
      this.emitItemMarketList.emit(this.addItemMarketList);
      this.addItemMarketList = "";
    }

  }

}
