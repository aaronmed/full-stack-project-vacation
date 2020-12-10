import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdvertsService } from '../services/adverts.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchAdvertForm: FormGroup;
  today: String;
  minDate: String;

  constructor(public fb: FormBuilder,
    private router: Router,
    private advertService: AdvertsService) {
    this.searchAdvertForm = this.fb.group({
      address: [''],
      startDate: [''],
      endDate: [''],
      guests: ['']
    });
  }

  ngOnInit() {
    this.today = new Date().toISOString();
  }

  onFormSubmit() {
    var startFormat = this.searchAdvertForm.value.startDate.split('T')[0];
    var endFormat = this.searchAdvertForm.value.endDate.split('T')[0];
    this.advertService.setStartDate(startFormat);
    this.advertService.setEndDate(endFormat);
    this.advertService.setAddress(this.searchAdvertForm.value.address);
    this.advertService.setGuests(this.searchAdvertForm.value.guests);
    this.router.navigateByUrl("/adverts");
  }

  getStartDate() {
    var dateFormat = this.searchAdvertForm.value.startDate.split('T')[0];
    this.minDate = dateFormat;
    this.searchAdvertForm.controls.endDate.setValue(null);
  }
}
