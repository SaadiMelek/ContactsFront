import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ContactsService} from '../services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { CpColorDirective } from './cp-color.directive';
import { CpColorParentComponent } from './cp-color-parent/cp-color-parent.component';
import { CpThemeComponent } from './cp-theme/cp-theme.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import {GlobalErrorHandlerService} from './global-error-handler.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BookService} from './book.service';
import { BookUpdateComponent } from './book-update/book-update.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import {ButtonModule} from 'primeng/button';

const appRoutes = [
  {path:"about", component:AboutComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"new-contact",component: /*NouveauContactComponent*/ NewContactComponent},
  {path:"edit-contact/:id", component:EditContactComponent},
  {path:"number", component:NumberParentComponent},
  {path:"cpcolor", component:CpColorParentComponent},
  {path:"cptheme", component:CpThemeComponent},
  {path: 'book', component: BookComponent},
  {path: 'add-book', component: AddBookComponent, outlet: 'bookPopup' },
  {path: 'update-book/:book-id', component: BookUpdateComponent, outlet: 'bookPopup' },
  {path: 'book-detail', component: BookDetailComponent, outlet: 'bookList' },
  {path: 'error', component: GlobalErrorComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: "", redirectTo:'/about', pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    NumberComponent,
    NumberParentComponent,
    CpColorDirective,
    CpColorParentComponent,
    CpThemeComponent,
    GlobalErrorComponent,
    PageNotFoundComponent,
    BookComponent,
    BookUpdateComponent,
    AddBookComponent,
    BookDetailComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule, BrowserAnimationsModule /*, ButtonModule*/
  ],
  providers: [ContactsService, GlobalErrorHandlerService, BookService, { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
