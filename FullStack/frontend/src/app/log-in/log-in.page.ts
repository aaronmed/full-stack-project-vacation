import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Storage } from '@ionic/storage';

const CREDENTIALS = gql`
mutation ($username: String, $password: String){
  login(
    username: $username
    password: $password
   ){
    id username password
   }
 }
  `;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private apollo: Apollo, 
    public fb: FormBuilder, 
    private router: Router, 
    private storage: Storage) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.loginForm.valid) {
      this.isSubmitted = true;
      return false;
    } else {
      this.apollo.mutate({
        mutation: CREDENTIALS,
        variables: {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        }
      }).subscribe((res: any) => {
        this.isSubmitted = false;
        this.loginForm.reset();
        if(res.data.login == null){
          console.log("No existe");
        } else {
          this.storage.set('iduser',res.data.login.id);
          this.router.navigateByUrl("/home");
        }
      });
    }
  }

  register(){
    this.router.navigateByUrl("/register");
  }
}
