import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AdvertsService } from '../services/adverts.service';
import { AlertController } from '@ionic/angular';

const DELETE_ADVERT = gql`
mutation ($idAdvert: ID){
  deleteAdvert(
     id: $idAdvert
   )
 }
  `;

const ADVERT_BY_USER = gql`
  query advertsByUser($idAdvert: ID){
    advertsByUser(id: $idAdvert) {
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

@Component({
  selector: 'app-my-adverts',
  templateUrl: './my-adverts.page.html',
  styleUrls: ['./my-adverts.page.scss'],
})
export class MyAdvertsPage implements OnInit {
  adverts: any[];

  constructor(private apollo: Apollo, private router: Router, private advertService: AdvertsService, public alertController: AlertController) { }

  ngOnInit() {
    this.getAdverts();
  }


  ionViewWillEnter() {
    this.getAdverts();
}

getAdverts() {
  this.apollo
    .watchQuery({
      query: ADVERT_BY_USER,
      variables: {
        idAdvert: 1,
      },
    })
    .valueChanges.subscribe((result: any) => {
      this.adverts = result.data.advertsByUser;
    });
}



updateAdvert(id: number) {
  this.router.navigateByUrl("/update-advert");
  this.advertService.setCurrentAdvertId(id);
}

createAdvert() {
  this.router.navigateByUrl("/create-advert");
}

deleteAdvert(id: number) {
  this.apollo.mutate({
    mutation: DELETE_ADVERT,
    variables: {
      idAdvert: id
    }
  }).subscribe(() => {
    this.presentAlert();
    this.getAdverts();

  });
}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Aviso',
    message: 'Anuncio borrado.',
    buttons: ['OK']
  });

  await alert.present();
}

async presentAlertError() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Aviso',
    message: '¡ERROR CONEXIÓN BASE DE DATOS!',
    buttons: ['OK']
  });

  await alert.present();
}
}
