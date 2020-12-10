import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AdvertsService } from '../services/adverts.service';

const BOOK_ADVERT = gql`
mutation ($user: ID , $advert: ID, $start: Date , $end: Date ) {
  createBook(
     user: 1,
     advert: 1,
     start: "2020-02-10",
     end: "2020-03-14",
   ){
     user {id} advert {id} start end
   }
 }
  `;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  adverts: any[];
  reviews: any[];
  average: any;

  constructor(private apollo: Apollo, private advertService: AdvertsService, private router: Router,) { }

  ngOnInit() {
    this.getAdverts();
    this.getReviews();
    this.getAverageReview();
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

  book() {
    this.apollo.mutate({
      mutation: BOOK_ADVERT
    });
    console.log("Agua");
  }

  getAverageReview() {
    let id = this.advertService.getCurrentAdvertId();
    this.apollo
      .watchQuery({
        query: gql`
    query advert($idAdvert: ID){
      advertAverageReviews(id: $idAdvert)
    }
    `,
        variables: {
          idAdvert: id
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.average = result.data.advertAverageReviews;
        console.log(result.data.advertAverageReviews);
      });
  }
}
