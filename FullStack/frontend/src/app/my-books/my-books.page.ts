import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const CANCEL_BOOK = gql`
mutation ($idBook: ID){
  deleteBook(
     id: $idBook
   )
 }
  `;

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {
  books: any[];

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.apollo
      .watchQuery({
        query: gql`
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
    `,
        variables: {
          idUser: 1
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.books = result.data.booksByUser;
        console.log(this.books);
      });
  }

  cancelBook(id: number) {
    this.apollo.mutate({
      mutation: CANCEL_BOOK,
      variables: {
        idBook: id
      }
    }).subscribe();
  }
}

