import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { ListPaginationComponent } from './list-pagination.component';

describe('ListPaginationComponent', () => {
  let component: ListPaginationComponent;
  let fixture: ComponentFixture<ListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          NgbPaginationModule
        ],
        providers: [NgbPaginationConfig],
        declarations: [ListPaginationComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
