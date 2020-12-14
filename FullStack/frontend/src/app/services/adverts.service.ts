import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  currentAdvertId: number;

  constructor() { }

  setCurrentAdvertId(id: number) {
    this.currentAdvertId = id;
  }

  getCurrentAdvertId(): number {
    return this.currentAdvertId;
  }
}
