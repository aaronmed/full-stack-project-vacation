import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AdvertsService } from '../services/adverts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  adverts: any[];
  reviews: any[];

  constructor(private apollo: Apollo, private advertService: AdvertsService, private router: Router,) { }

  ngOnInit() {
    this.getAdverts();
    this.getReviews();
  }

  returnAdverts() {
    this.router.navigateByUrl("/adverts");
  }

  getAdverts() {
    let id = this.advertService.getCurrentAdvertId();
    //console.log(id);
    this.apollo
      .watchQuery({
        query: gql`
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
            name
          }
        }
      }
      `,
        variables: {
          idAdvert: id,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.adverts = result.data.advert;
      });
  }

  getReviews() {
    let id = this.advertService.getCurrentAdvertId();
    this.apollo
      .watchQuery({
        query: gql`
      query advert($idAdvert: ID){
        advertReviews(advert: $idAdvert) {
          id,
          description,
          stars,
          published
        }
      }
      `,
        variables: {
          idAdvert: id,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.reviews = result.data.advertReviews;
        console.log(this.reviews);
      });
  }

  book(){
    
  }
}
