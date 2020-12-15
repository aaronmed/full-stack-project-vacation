import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';;
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

const GET_ADVERTS = gql`
query advert($address: String, $guests: Int){
  advertFilters(address: $address, guests: $guests) {
    id,
    description,
    address,
    published,  
    price,
    guests,
    user {
      name,
      surname
    }
  }
}
`;

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {
  adverts: any[];
  address: string;
  guests: string;
  existAdvert = true;

  constructor(private apollo: Apollo,
    private router: Router,
    public storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.storage.get('ADDRESS').then((val) => {
      this.address = val;
      this.storage.get('GUESTS').then((val) => {
        this.guests = val;
        this.getAdverts();
      });
    });
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/details");
    this.storage.set('ID_ADVERT', id);
  }


  getAdverts() {
    this.apollo
      .watchQuery({
        query: GET_ADVERTS,
        variables: {
          address: this.address,
          guests: this.guests
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.adverts = result.data.advertFilters;
        if (this.adverts.length == 0) {
          this.existAdvert = false;
        }
      }, (error) =>{
        this.presentAlertError();
      });
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Error de conexión con la base de datos.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
