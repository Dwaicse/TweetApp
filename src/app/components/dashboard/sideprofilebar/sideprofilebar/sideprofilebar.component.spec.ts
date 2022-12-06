import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideprofilebarComponent } from './sideprofilebar.component';

describe('SideprofilebarComponent', () => {
  let component: SideprofilebarComponent;
  let fixture: ComponentFixture<SideprofilebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideprofilebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideprofilebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
