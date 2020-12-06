import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  currentAdvertId: number;
  startDate: String;
  endDate: String;
  address: String;
  guests: String;

  constructor() { }

  setCurrentAdvertId(id: number) {
    this.currentAdvertId = id;
  }

  getCurrentAdvertId(): number {
    return this.currentAdvertId;

  }

  setStartDate(startDate: String) {
    this.startDate = startDate;
  }

  getStartDate(): String {
    return this.startDate;
  }

  setEndDate(endDate: String) {
    this.endDate = endDate;
  }

  getEndDate(): String {
    return this.endDate;
  }

  setAddress(address: String) {
    this.address = address;
  }

  getAddress(): String {
    return this.address;
  }

  setGuests(guests: String) {
    this.guests = guests;
  }

  getGuests(): String {
    return this.guests;
  }


}
