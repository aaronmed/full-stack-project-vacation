import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const UPDATE_USER = gql`
mutation ($id: ID, $username: String, $password: String, $name: String, $surname: String, $dni: String, $telephone: String){
  updateUser(
    id: $id,
    username: $username ,
    password: $password,
    name: $name,
    surname: $surname,
    dni: $dni,
    telephone: $telephone 
   ){
    id username password name surname dni telephone
   }
 }
  `;

const USER = gql`
  query user($idUser: ID){
    user(id: $idUser){
      name,
      surname,
      username,
      password,
      telephone,
      dni
    }
  }
  `;


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  updateUserForm: FormGroup;
  isSubmitted = false;
  iduser: number;
  user: any[];

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private storage: Storage) {
    this.updateUserForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.storage.get('iduser').then((val) => {
      this.iduser = val;
      this.getUser();
    });
  }

  onFormSubmit() {
    if (!this.updateUserForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      this.apollo.mutate({
        mutation: UPDATE_USER,
        variables: {
          id: this.iduser,
          username: this.updateUserForm.value.username,
          password: this.updateUserForm.value.password,
          name: this.updateUserForm.value.name,
          surname: this.updateUserForm.value.surname,
          dni: this.updateUserForm.value.dni,
          telephone: this.updateUserForm.value.telephone
        }
      }).subscribe((res) => {
        console.log(res);
        this.isSubmitted = false;
        this.presentAlert();
      });
    }
  }

  getUser() {
    console.log(this.iduser);
    this.apollo
      .watchQuery({
        query: USER,
        variables: {
          idUser: this.iduser,
        },
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.updateUserForm = this.fb.group({
          username: result.data.user.username,
          password: result.data.user.password,
          name: result.data.user.name,
          surname: result.data.user.surname,
          dni: result.data.user.dni,
          telephone: result.data.user.telephone
        });
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Usuario actualizado.',
      buttons: [{
        text: 'OK', handler: () => {
          this.router.navigateByUrl("/profile").then(() => {
            location.reload();
          });
        }
      }]
    });

    await alert.present();
  }


}
