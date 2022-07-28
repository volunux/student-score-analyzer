import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangesMenuComponent } from './changes-menu/changes-menu.component';
import { DeleteOptionComponent } from './delete-option/delete-option.component';
import { EntityValidationErrorComponent } from './entity-validation-error/entity-validation-error.component';
import { EntryDeleteAllComponent } from './entry-delete-all/entry-delete-all.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoEntriesComponent } from './no-entries/no-entries.component';
import { NoEntryDetailComponent } from './no-entry-detail/no-entry-detail.component';
import { NoEntryUpdateDeleteComponent } from './no-entry-update-delete/no-entry-update-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchOptionComponent } from './search-option/search-option.component';



@NgModule({
  declarations: [
    EntityValidationErrorComponent,
    DeleteOptionComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    NoEntriesComponent,
    NoEntryDetailComponent,
    NoEntryUpdateDeleteComponent,
    PageNotFoundComponent,
    SearchOptionComponent,
    PaginationComponent,
    ChangesMenuComponent,
    EntryDeleteAllComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    EntityValidationErrorComponent,
    DeleteOptionComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    NoEntriesComponent,
    NoEntryDetailComponent,
    NoEntryUpdateDeleteComponent,
    PageNotFoundComponent,
    SearchOptionComponent,
    PaginationComponent,
    ChangesMenuComponent,
    EntryDeleteAllComponent
  ]
})
export class SharedComponentModule { }
