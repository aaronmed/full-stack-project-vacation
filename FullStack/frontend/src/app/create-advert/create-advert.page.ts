import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const CREATE_ADVERT = gql`
mutation ($description: String, $address: String, $published: String, $price: Float, $guests: Int, $bathrooms: Int, $bedrooms: Int, $beds: Int){
  createAdvert(
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
  selector: 'app-create-advert',
  templateUrl: './create-advert.page.html',
  styleUrls: ['./create-advert.page.scss'],
})
export class CreateAdvertPage implements OnInit {
  createAdvertForm: FormGroup;

  constructor(private apollo: Apollo, public fb: FormBuilder, private router: Router) {
    this.createAdvertForm = this.fb.group({
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
  }

  

  onFormSubmit() {
    this.apollo.mutate({
      mutation: CREATE_ADVERT,
      variables: {
        description: this.createAdvertForm.value.description,
        address: this.createAdvertForm.value.address,
        published: new Date().toISOString().split('T')[0],
        price: this.createAdvertForm.value.price,
        guests: this.createAdvertForm.value.guests,
        bathrooms: this.createAdvertForm.value.bathrooms,
        bedrooms: this.createAdvertForm.value.bedrooms,
        beds: this.createAdvertForm.value.beds,
        user: 1
      }
    }).subscribe((res) => {
      this.router.navigateByUrl("/my-adverts");
    });
  }

  cancelAdvert() {
    this.router.navigateByUrl("/my-adverts");
  }
}
