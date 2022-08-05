import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})
export class AddNewItemPage implements OnInit {
  categories = ['food', 'work', 'school']

  itemName
  itemPrice
  itemDate
  itemCategory

  itemObject 

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.itemObject)
  }

  selectCategory(i){
    this.itemCategory = this.categories[i]
  }

  addItem(){
    this.itemObject = ({itemName:this.itemName, itemPrice:this.itemPrice,
    itemDate:this.itemDate, itemCategory:this.itemCategory})

    this.dismiss()
  }
  

}
