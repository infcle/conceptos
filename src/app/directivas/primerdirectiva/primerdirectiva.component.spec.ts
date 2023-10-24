import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerdirectivaComponent } from './primerdirectiva.component';

describe('PrimerdirectivaComponent', () => {
  let component: PrimerdirectivaComponent;
  let fixture: ComponentFixture<PrimerdirectivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerdirectivaComponent]
    });
    fixture = TestBed.createComponent(PrimerdirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
