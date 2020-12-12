import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AdvertsService } from '../services/adverts.service';
import { Storage } from '@ionic/storage';

const BOOK_ADVERT = gql`
mutation ($idUser: Int, $idAdvert: Int, $startDate: String, $endDate: String){
  createBook(
     user: $idUser,
     advert: $idAdvert,
     start: $startDate,
     end: $endDate,
   ){
     user {id} advert {id} start end
   }
 }
  `;
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
      name,
      surname,
      telephone
    }
  }
}
`;

const REVIEWS =  gql`
query advert($idAdvert: ID){
  advertReviews(advert: $idAdvert) {
    id,
    description,
    stars,
    published
  }
}
`;

const AVERAGE_REVIEWS = gql`
query advert($idAdvert: ID){
  advertAverageReviews(id: $idAdvert)
}
`;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  adverts: any[];
  reviews: any[];
  average: any;
  iduser: number;
  islogin = false;

  constructor(private apollo: Apollo, 
    private advertService: AdvertsService, 
    private router: Router, 
    private alertController: AlertController,
    public storage: Storage) { }

  ngOnInit() {
    this.getAdverts();
    this.getReviews();
    this.getAverageReview();
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      if(val != null){
        this.islogin = true;
      }
    });
  }

  returnAdverts() {
    this.router.navigateByUrl("/adverts");
  }

  getAdverts() {
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
      });
  }

  getReviews() {
    let id = this.advertService.getCurrentAdvertId();
    this.apollo
      .watchQuery({
        query: REVIEWS,
        variables: {
          idAdvert: id,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.reviews = result.data.advertReviews;
        console.log(this.reviews);
      });
  }

  book() {
    let id = this.advertService.getCurrentAdvertId();
    let startDate = this.advertService.getStartDate();
    let endDate = this.advertService.getEndDate();
    this.apollo.mutate({
      mutation: BOOK_ADVERT,
      variables: {
        idUser: this.iduser,
        idAdvert: id,
        startDate: startDate,
        endDate: endDate
      }
    }).subscribe((res) => {
      this.presentAlert();
      this.router.navigateByUrl("/my-books");
    });
  }

  getAverageReview() {
    let id = this.advertService.getCurrentAdvertId();
    this.apollo
      .watchQuery({
        query: AVERAGE_REVIEWS,
        variables: {
          idAdvert: id
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.average = result.data.advertAverageReviews;
        console.log(result.data.advertAverageReviews);
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Reserva realizada.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
