import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Advert } from '../models/advert';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {
  adverts: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
      {
      adverts {
        description,
        address,
        published,  
        price,
        guests,
        bedrooms,
        bathrooms,
        beds
      }
    }
      `,
    })
    .valueChanges.subscribe((result:  any) => {
      this.adverts = result.data.adverts;
      this.loading = result.loading;
      this.error = result.error;
      console.log(result.data.adverts);
    });
  }

}
