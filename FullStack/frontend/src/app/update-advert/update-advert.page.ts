import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AdvertsService } from '../services/adverts.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const ADVERT = gql`
query advert($idAdvert: ID){
  advert(id: $idAdvert) {
    id,
    description,
    address,
    published,  
    price,
    guests,
    bedrooms,
    bathrooms,
    beds,
    user {
      name
    }
  }
}
`;

const UPDATE_ADVERT = gql`
mutation ($id: ID, $description: String, $address: String, $published: String, $price: Float, $guests: Int, $bathrooms: Int, $bedrooms: Int, $beds: Int, $user: Int){
  updateAdvert(
    id: $id,
    description: $description,
    address: $address,
    published: $published,
    price: $price,
    guests: $guests,
    bathrooms: $bathrooms,
    bedrooms: $bedrooms,
    beds: $beds,
    user: $user
   ){
    description address published price guests bathrooms bedrooms beds user {id}
   }
 }
  `;

@Component({
  selector: 'app-update-advert',
  templateUrl: './update-advert.page.html',
  styleUrls: ['./update-advert.page.scss'],
})
export class UpdateAdvertPage implements OnInit {
  updateAdvertForm: FormGroup;
  adverts: any[];
  published: any;
  id: any;
  isSubmitted = false;
  iduser: number;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    private advertService: AdvertsService,
    public alertController: AlertController,
    private storage: Storage) {
    this.updateAdvertForm = this.fb.group({
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      guests: new FormControl('', Validators.required),
      bathrooms: new FormControl('', Validators.required),
      bedrooms: new FormControl('', Validators.required),
      beds: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    let id = this.advertService.getCurrentAdvertId();
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      this.apollo
        .watchQuery({
          query: ADVERT,
          variables: {
            idAdvert: id,
          },
        })
        .valueChanges.subscribe((result: any) => {
          this.adverts = result.data.advert;
          this.published = result.data.advert.published;
          this.id = result.data.advert.id;
          this.updateAdvertForm = this.fb.group({
            description: result.data.advert.description,
            address: result.data.advert.address,
            price: result.data.advert.price,
            guests: result.data.advert.guests,
            bathrooms: result.data.advert.bathrooms,
            bedrooms: result.data.advert.bedrooms,
            beds: result.data.advert.beds,
          });
        });
    });
  }

  cancelAdvert() {
    this.router.navigateByUrl("/my-adverts");
  }

  onFormSubmit() {
    if (!this.updateAdvertForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      this.apollo.mutate({
        mutation: UPDATE_ADVERT,
        variables: {
          id: this.id,
          description: this.updateAdvertForm.value.description,
          address: this.updateAdvertForm.value.address,
          published: this.published,
          price: this.updateAdvertForm.value.price,
          guests: this.updateAdvertForm.value.guests,
          bathrooms: this.updateAdvertForm.value.bathrooms,
          bedrooms: this.updateAdvertForm.value.bedrooms,
          beds: this.updateAdvertForm.value.beds,
          user: this.iduser
        }
      }).subscribe((res) => {
        console.log(res);
        this.isSubmitted = false;
        this.updateAdvertForm.reset();
        this.presentAlert();
        this.router.navigateByUrl("/my-adverts").then( () =>{
          location.reload();
        });
      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Anuncio editado.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
