import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

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
      id,
      name,
      surname,
      telephone
    }
  }
}
`;

const REVIEWS = gql`
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
  iduseradvert: number;
  islogin = false;
  propietary = false;
  today: string;
  idadvert: number;
  startdate: string;
  enddate: string;

  constructor(private apollo: Apollo,
    private router: Router,
    private alertController: AlertController,
    public storage: Storage,
    private modalController: ModalController) { }

  ngOnInit() {
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      if (val != null) {
        this.islogin = true;
      }
      this.storage.get('START_DATE').then((val) => { this.startdate = val; });
      this.storage.get('END_DATE').then((val) => { this.enddate = val; });
      this.storage.get('ID_ADVERT').then((val) => {
        this.idadvert = val;
        this.getAdverts();
        this.getReviews();
        this.getAverageReview();
      });
    });
  }

  returnAdverts() {
    this.router.navigateByUrl("/adverts");
  }

  getAdverts() {
    this.apollo
      .watchQuery({
        query: ADVERT,
        variables: {
          idAdvert: this.idadvert,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.adverts = result.data.advert;
        this.iduseradvert = result.data.advert.user.id;
      });
  }

  getReviews() {
    this.apollo
      .watchQuery({
        query: REVIEWS,
        variables: {
          idAdvert: this.idadvert,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.reviews = result.data.advertReviews;
      });
  }

  book() {
    if (this.iduser == this.iduseradvert) {
      this.presentCantBook();
    } else {
      this.apollo.mutate({
        mutation: BOOK_ADVERT,
        variables: {
          idUser: this.iduser,
          idAdvert: this.idadvert,
          startDate: this.startdate,
          endDate: this.enddate
        }
      }).subscribe((res) => {
        this.presentAlert();
        this.router.navigateByUrl("/my-books");
      });
    }
  }

  getAverageReview() {
    this.apollo
      .watchQuery({
        query: AVERAGE_REVIEWS,
        variables: {
          idAdvert: this.idadvert
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.average = result.data.advertAverageReviews;
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

  async presentCantBook() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'No puede hacer la reserva de su propio anuncio.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentCantReview() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'No puede enviar críticas de su propio anuncio.',
      buttons: ['OK']
    });

    await alert.present();
  }

  openModal() {
    if (this.iduser == this.iduseradvert) {
      this.presentCantReview();
    } else {
      this.modalController.create({ component: ModalpopupPage }).then((modalElement) => {
        modalElement.present();
      });
    }
  }
}
