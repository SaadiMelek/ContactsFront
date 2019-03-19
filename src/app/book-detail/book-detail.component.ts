import {Component, HostBinding, OnInit} from '@angular/core';
import {FLY_IN_OUT_ANIMATION} from '../round-anticlock.animation';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {Book} from '../../model/model.book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class BookDetailComponent implements OnInit {
  @HostBinding('@flyInOutTrigger') flyInOutTrigger = 'in';
  books: Promise<Book[]>
  constructor(private bookService: BookService, private router: Router) {
  }
  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
  close() {
    this.router.navigate([{ outlets: { bookList: null }}]);
  }
}
