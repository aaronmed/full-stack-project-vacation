import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private currentNumber = 0;


  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    if(this.currentNumber!=0){
      this.currentNumber--;
    }
  }
}
