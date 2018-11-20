import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListItemComponent } from './ads-list-item.component';

describe('AdsListItemComponent', () => {
  let component: AdsListItemComponent;
  let fixture: ComponentFixture<AdsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
