import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AdvertsService } from '../services/adverts.service';

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

  constructor(private apollo: Apollo, private router: Router, private advertService: AdvertsService) { }

  ngOnInit() {
      this.getAdverts();
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/details");
    this.advertService.setCurrentAdvertId(id);
  }


  getAdverts() {
    this.apollo
    .watchQuery({
      query: GET_ADVERTS,
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

  login(){
    this.router.navigateByUrl("/log-in");
  }
}
