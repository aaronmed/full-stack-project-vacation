import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { AlertController } from '@ionic/angular';
import { Apollo } from 'apollo-angular';

const CREATE_USER = gql`
mutation ($username: String, $password: String, $name: String, $surname: String, $dni: String, $telephone: String){
  createUser(
    username: $username
    password: $password
    name: $name
    surname: $surname
    dni: $dni
    telephone: $telephone
  ){
    username password name surname dni telephone
  }
}
`;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController) {
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.registerForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      this.apollo.mutate({
        mutation: CREATE_USER,
        variables: {
          username: this.registerForm.value.username,
          password: this.registerForm.value.password,
          name: this.registerForm.value.name,
          surname: this.registerForm.value.surname,
          dni: this.registerForm.value.dni,
          telephone: this.registerForm.value.telephone
        }
      }).subscribe((res: any) => {
        this.isSubmitted = false;
        this.presentAlert();
        this.router.navigateByUrl("/home");
      }, (error) =>{
        this.presentAlertError();
      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Usuario nuevo registrado.',
      buttons: ['OK']
    });

    await alert.present();
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
