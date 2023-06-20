import { Component, DoCheck} from '@angular/core';
import { MarketList } from '../../model/marketlist';

@Component({
  selector: 'app-marketlist',
  templateUrl: './marketlist.component.html',
  styleUrls: ['./marketlist.component.scss']
})
export class MarketlistComponent implements DoCheck {

  public marketList: Array<MarketList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor () { }

  ngDoCheck() {
    this.setLocalStorage();
  }

  public setEmitMarketList (event: string) {
    this.marketList.push({itemList: event, checked: false})
  }

  public deleteItemMarketList(event: number) {
    this.marketList.splice(event,1);
  }

  public deleteAllMarketList() {
    const confirm = window.confirm("Deleta all?");

    if(confirm === true) {
      this.marketList = [];
    }
  }

  public validationInput (event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Empty item, do you want to delete it?");

      if(confirm) {
        this.deleteItemMarketList(index);
      }
    }
  }

  public setLocalStorage() {
    if(this.marketList) {
      this.marketList.sort( (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.marketList))
    }
  }
}
