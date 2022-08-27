import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoDetailComponent } from './table-info-detail.component';

describe('TableInfoDetailComponent', () => {
  let component: TableInfoDetailComponent;
  let fixture: ComponentFixture<TableInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
