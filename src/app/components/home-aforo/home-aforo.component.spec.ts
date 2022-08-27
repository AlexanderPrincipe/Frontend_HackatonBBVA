import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAforoComponent } from './home-aforo.component';

describe('HomeAforoComponent', () => {
  let component: HomeAforoComponent;
  let fixture: ComponentFixture<HomeAforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
