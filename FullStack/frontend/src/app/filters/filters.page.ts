import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

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
