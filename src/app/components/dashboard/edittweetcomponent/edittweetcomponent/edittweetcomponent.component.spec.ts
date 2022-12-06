import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittweetcomponentComponent } from './edittweetcomponent.component';

describe('EdittweetcomponentComponent', () => {
  let component: EdittweetcomponentComponent;
  let fixture: ComponentFixture<EdittweetcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittweetcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittweetcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
