import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawbarComponent } from './nawbar.component';

describe('NawbarComponent', () => {
  let component: NawbarComponent;
  let fixture: ComponentFixture<NawbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NawbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NawbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
