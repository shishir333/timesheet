import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { isNil } from 'lodash';

@Component({
  selector: 'ts-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss']
})
export class ListPaginationComponent implements OnChanges {
  @Input() list: any[] = [];
  @Input() maxSize = 5;
  @Input() page = 1;
  @Input() collectionSize: number;
  @Input() entriesPerPage: number;
  @Output() pageChange = new EventEmitter();

  showPagination = true;

  ngOnChanges() {
    // Following lines of code are the same as
    // the one in updatedCollectionSize getter
    // Added it here as the calculation wasn't
    // working on this event
    let collCount: number;
    if (isNil(this.collectionSize) || this.collectionSize <= 0) {
      this.collectionSize = this.list.length;
    }
    if (this.entriesPerPage && this.entriesPerPage !== 10) {
      collCount = (this.collectionSize * 10) / this.entriesPerPage;
    }
    collCount = this.collectionSize;
    // --------------------------------------
    if (collCount <= this.entriesPerPage) {
      this.showPagination = false;
    } else {
      this.showPagination = true;
    }
  }
  /**
   * This method provides the updated collection size
   * for the calculation of number of pages
   * the default page size for ngb pagination is 10
   * so if page size is updated,
   * number of pages needs to be updated based on page size
   * @returns {number}
   */
  get updatedCollectionSize() {
    if (isNil(this.collectionSize) || this.collectionSize <= 0) {
      this.collectionSize = this.list.length;
    }
    if (this.entriesPerPage && this.entriesPerPage !== 10) {
      return (this.collectionSize * 10) / this.entriesPerPage;
    }
    return this.collectionSize;
  }
}
