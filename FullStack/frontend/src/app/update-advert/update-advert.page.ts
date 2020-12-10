import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AdvertsService } from '../services/adverts.service';

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
mutation ($id: ID, $description: String, $address: String, $published: String, $price: Float, $guests: Int, $bathrooms: Int, $bedrooms: Int, $beds: Int){
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
    user: 1
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

  constructor(private apollo: Apollo, public fb: FormBuilder, private router: Router, private advertService: AdvertsService) {
    this.updateAdvertForm = this.fb.group({
      description: [''],
      address: [''],
      price: [''],
      guests: [''],
      bathrooms: [''],
      bedrooms: [''],
      beds: ['']
    });
  }

  ngOnInit() {
    let id = this.advertService.getCurrentAdvertId();
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
          beds: result.data.advert.beds
        });
      });
  }

  cancelAdvert() {
    this.router.navigateByUrl("/my-adverts");
  }

  onFormSubmit() {
    console.log(this.published);
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
        user: 1
      }
    }).subscribe((res) => {
      this.router.navigateByUrl("/my-adverts");
    });
  }
}
