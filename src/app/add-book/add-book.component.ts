import {Component, HostBinding, OnInit} from '@angular/core';
import {Book} from '../../model/model.book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {ROUND_ANTICLOCK_ANIMATION} from '../fly-in-out.animation';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AddBookComponent {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();
  constructor(private bookService: BookService, private router: Router) {
  }
  add() {
    this.bookService.addBook(this.book).then(
      () => 	this.router.navigate([{ outlets: { bookPopup: null }}])
    );
  }
}
