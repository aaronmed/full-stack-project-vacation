import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Advert } from '../models/advert';
import { AdvertsService } from '../services/adverts.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {
  adverts: any[];

  constructor(private apollo: Apollo, private router: Router, private advertService: AdvertsService) { }

  ngOnInit() {
    //this.getAdverts();
    this.getAdvertsWithFilters();
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/details");
    this.advertService.setCurrentAdvertId(id);
    console.log(id);
  }

  getAdverts() {
    this.apollo
      .watchQuery({
        query: gql`
      {
      adverts {
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
      `,
      })
      .valueChanges.subscribe((result: any) => {
        this.adverts = result.data.adverts;
        //console.log(result.data.adverts);
      });
  }

  getAdvertsWithFilters() {
    this.apollo
    .watchQuery({
      query: gql`
    query advert($address: String, $guests: Int){
      advertFilters(address: $address, guests: $guests) {
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
    `,
      variables: {
        address: this.advertService.getAddress(),
        guests: this.advertService.getGuests()
      },
    })
    .valueChanges.subscribe((result: any) => {
      this.adverts = result.data.advertFilters; 
      console.log(this.adverts);
      console.log(this.advertService.getAddress());
    });
  }
}
