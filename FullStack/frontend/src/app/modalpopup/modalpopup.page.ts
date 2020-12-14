import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const SEND_REVIEW = gql`
mutation ($description: String, $stars: Int, $published: String, $advert: Int){
  createReview(
     description: $description,
     stars: $stars,
     published: $published,
     advert: $advert,
   ){
     description, stars, published, advert {id}
   }
 }
 `;

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {
  createReviewForm: FormGroup;
  idadvert: number;

  constructor(private modalController: ModalController,
    public fb: FormBuilder,
    private storage: Storage,
    private apollo: Apollo) {
      this.createReviewForm = this.fb.group({
        review: new FormControl('', Validators.required),
        stars: new FormControl('', Validators.required),
      });
     }

  ngOnInit() {
    this.storage.get('ID_ADVERT').then((val) => {
      this.idadvert = val;
    });
  }

  closeModal(){
    this.modalController.dismiss();
  }

  onFormSubmit(){
    let today = new Date().toISOString().split('T')[0];
    console.log(today);
    console.log(this.createReviewForm.value.review);
    console.log(this.createReviewForm.value.stars);
    this.apollo.mutate({
      mutation: SEND_REVIEW,
      variables: {
        description: this.createReviewForm.value.review,
        stars: this.createReviewForm.value.stars,
        published: today,
        advert: this.idadvert
      }
    }).subscribe((res) => {
      this.closeModal();
    });
  }

}
