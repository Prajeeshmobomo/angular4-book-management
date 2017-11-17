import { Component, OnInit } from '@angular/core';
import { Book } from '../book';


const LIBRARYBOOKS: Book[] = [
  { id: 11, name: 'Mr. Nice', image_path: '/assets/images/book1.jpg', description: "The Road is a 2006 novel by American writer Cormac McCarthy. It is a post-apocalyptic tale of a journey of a father and his young son over a period of several months, across a landscape blasted by an unspecified cataclysm that has destroyed most of civilization and, in the intervening years, almost all life on Earth. The novel was awarded the 2007 Pulitzer Prize for Fiction and the James Tait Black Memorial Prize for Fiction in 2006. The book was adapted to a film of the same name in 2009, directed by John Hillcoat."},
  { id: 12, name: 'Narco', image_path: '/assets/images/book2.jpg', description: "Interpreter of Maladies is a book collection of nine short stories by Indian American author Jhumpa Lahiri published in 1999. It won the Pulitzer Prize for Fiction and the Hemingway Foundation/PEN Award in the year 2000 and has sold over 15 million copies worldwide. It was also chosen as The New Yorker's Best Debut of the Year and is on Oprah Winfrey's Top Ten Book List."  },
  { id: 13, name: 'Bombasto', image_path: '/assets/images/book3.jpg', description: '' },
  { id: 14, name: 'Celeritas', image_path: '/assets/images/book4.jpg', description: '' }
];

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books;
  libraryBooks = LIBRARYBOOKS;
  selectedBook: Book;
  onSelect(libraryBook: Book): void {
  	this.selectedBook = libraryBook;
  }; 

  constructor() { }

  ngOnInit() {
  }

}