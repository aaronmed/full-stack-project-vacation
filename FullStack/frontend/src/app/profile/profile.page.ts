import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


const GET_USER = gql`
  query user($id: ID){
    user(id: $id) {
  id,
  username,
  password,
  name,
  surname,
  dni,
  telephone
}
}
`;

const CHECK_USER = gql`
  query checkUser($id: ID){
    checkUserDelete(id: $id)
}
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID){
    deleteUser(id: $id)
}
`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users: any[];
  iduser: number;

  constructor(private apollo: Apollo,
    private router: Router,
    public alertController: AlertController,
    public storage: Storage) { }

  ngOnInit() {
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      this.getUser();
    });
  }

  getUser() {
    this.apollo
      .watchQuery({
        query: GET_USER,
        variables: {
          id: this.iduser,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result.data.user;
        console.log(result.data.user.name);
      });
  }

  deleteUser(id: number) {
    this.apollo
      .watchQuery({
        query: CHECK_USER,
        variables: {
          id: this.iduser,
        },
      })
      .valueChanges.subscribe((result: any) => {
        if (result.data.checkUserDelete) {
          this.apollo
            .mutate({
              mutation: DELETE_USER,
              variables: {
                id: this.iduser,
              },
            })
            .subscribe((res) => {
              this.storage.remove('iduser');
              this.router.navigateByUrl("/log-in").then(() => {
                location.reload();
              });;
            });
        } else {
          this.presentAlertCantBook(); 
        }
      });
  }

  async presentAlertCantBook() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: '¡No se puede borrar! Existen anuncios o reservas asociados a este usuario.',
      buttons: ['OK']
    });

    await alert.present();
  }

  updateUser(){
    this.router.navigateByUrl("/update-user");
  }
}
