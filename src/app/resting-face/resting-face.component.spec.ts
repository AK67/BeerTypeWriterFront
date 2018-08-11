import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestingFaceComponent } from './resting-face.component';

describe('RestingFaceComponent', () => {
  let component: RestingFaceComponent;
  let fixture: ComponentFixture<RestingFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestingFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestingFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
