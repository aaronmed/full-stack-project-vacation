import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ResourceLoader } from '@angular/compiler';

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
  isLogin = true;

  constructor(public fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    public storage: Storage) {
    this.searchAdvertForm = this.fb.group({
      address: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      guests: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.today = new Date().toISOString();
    this.searchAdvertForm.reset();
  }

  ionViewWillEnter(){
    this.searchAdvertForm.reset();
  }

  onFormSubmit() {
    if (!this.searchAdvertForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      var startFormat = this.searchAdvertForm.value.startDate.split('T')[0];
      var endFormat = this.searchAdvertForm.value.endDate.split('T')[0];
      this.storage.set('START_DATE',startFormat);
      this.storage.set('END_DATE', endFormat);
      this.storage.set('ADDRESS', this.searchAdvertForm.value.address);
      this.storage.set('GUESTS', this.searchAdvertForm.value.guests);
      this.router.navigateByUrl("/adverts");
      this.isSubmitted = false;
      this.searchAdvertForm.reset();
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

  checkStartDate() {
    if (!this.isStartDate) {
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
}
