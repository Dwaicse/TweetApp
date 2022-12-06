import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritetweetComponent } from './writetweet.component';

describe('WritetweetComponent', () => {
  let component: WritetweetComponent;
  let fixture: ComponentFixture<WritetweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritetweetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
