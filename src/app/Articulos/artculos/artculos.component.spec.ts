import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtculosComponent } from './artculos.component';

describe('ArtculosComponent', () => {
  let component: ArtculosComponent;
  let fixture: ComponentFixture<ArtculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
