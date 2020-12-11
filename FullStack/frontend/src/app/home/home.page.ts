import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertsService } from '../services/adverts.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchAdvertForm: FormGroup;
  today: String;
  minDate: String;
  isSubmitted = false;
  isStartDate = false;

  constructor(public fb: FormBuilder,
    private router: Router,
    private advertService: AdvertsService,
    private alertController: AlertController) {
    this.searchAdvertForm = this.fb.group({
      address: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      guests: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.today = new Date().toISOString();
  }

  onFormSubmit() {
    this.isSubmitted = true;
    if (!this.searchAdvertForm.valid) {
      console.log("Fill all fields");
      return false;
      
    } else {
      var startFormat = this.searchAdvertForm.value.startDate.split('T')[0];
      var endFormat = this.searchAdvertForm.value.endDate.split('T')[0];
      this.advertService.setStartDate(startFormat);
      this.advertService.setEndDate(endFormat);
      this.advertService.setAddress(this.searchAdvertForm.value.address);
      this.advertService.setGuests(this.searchAdvertForm.value.guests);
      this.router.navigateByUrl("/adverts");
    }
  }

  getStartDate() {
    var dateFormat = this.searchAdvertForm.value.startDate.split('T')[0];
    this.minDate = dateFormat;
    this.searchAdvertForm.controls.endDate.setValue(null);
    this.isStartDate = true;
  }

  get errorControl() {
    return this.searchAdvertForm.controls;
  }

  checkStartDate(){
    if (!this.isStartDate){
      this.presentAlert();
    } 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Primero seleccione la fecha de llegada.',
      buttons: ['OK']
    });

    await alert.present();
  }

  login(){
    this.router.navigateByUrl("/log-in");
  }
}
