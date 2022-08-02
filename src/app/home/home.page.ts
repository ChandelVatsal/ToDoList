import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  expenseTracker = [{
    itemName : "Restaurant 1",
    itemDate : "7/27/2022",
    itemPrice : "$40", 
    itemCategory : "Food"
  },
  {
    itemName : "Apple Store",
    itemDate : "7/10/2022",
    itemPrice : "$400", 
    itemCategory : "School"
  },
  {
    itemName : "Restaurant 2",
    itemDate : "7/28/2022",
    itemPrice : "$40", 
    itemCategory : "Food"
  },

]

  today : number = Date.now()
  constructor() {}

}
