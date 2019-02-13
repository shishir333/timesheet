import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPaginationComponent } from './list-pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  declarations: [ListPaginationComponent],
  exports: [ListPaginationComponent]
})
export class ListPaginationModule {
}
