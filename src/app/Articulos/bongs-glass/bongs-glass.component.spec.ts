import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongsGlassComponent } from './bongs-glass.component';

describe('BongsGlassComponent', () => {
  let component: BongsGlassComponent;
  let fixture: ComponentFixture<BongsGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongsGlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BongsGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
