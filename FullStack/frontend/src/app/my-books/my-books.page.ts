import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const CANCEL_BOOK = gql`
mutation ($idBook: ID){
  deleteBook(
     id: $idBook
   )
 }
  `;

const GET_BOOKS = gql`
query ($idUser: ID) {
  booksByUser (id: $idUser){
    id,
    start,
    end
    user {
      name,
    },
    advert{
      id,
      description,
      address,
      price
    }
  }
}
`;

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {
  books: any[];
  iduser: number;

  constructor(private apollo: Apollo, 
    private router: Router,
    public alertController: AlertController,
    public storage: Storage) { }

  ngOnInit() {
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      this.getBooks();
    });
  }

  getBooks() {
    this.apollo
      .watchQuery({
        query: GET_BOOKS,
        variables: {
          idUser: this.iduser
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.books = result.data.booksByUser;
        console.log(this.books);
      });
  }

  cancelBook(id: number) {
    this.presentAlertConfirm(id);
  }

  async presentAlertConfirm(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡AVISO!',
      message: 'Está a punto de cancelar una reserva, <strong>¿está seguro?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.presentAlertCancel();
          }
        }, {
          text: 'Si',
          handler: () => {
            this.apollo.mutate({
              mutation: CANCEL_BOOK,
              variables: {
                idBook: id
              }
            }).subscribe((res) => {
              this.presentAlertYes();
              this.router.navigateByUrl("/my-books");
              this.getBooks();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertYes() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Reserva cancelada.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertCancel() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'No se ha cancelado la reserva.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

