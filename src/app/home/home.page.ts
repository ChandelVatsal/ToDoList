import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  expenseTracker = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addItem(){
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    })

    modal.onDidDismiss().then(newItemObj =>{
      console.log(newItemObj.data);
      this.expenseTracker.push(newItemObj.data)
    })

    return await modal.present()
  }

  deleteItem(i){
    this.expenseTracker.splice(i,1)
  }
}
