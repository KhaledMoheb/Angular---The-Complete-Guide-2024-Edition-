import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLogComponent } from './details-log.component';

describe('DetailsLogComponent', () => {
  let component: DetailsLogComponent;
  let fixture: ComponentFixture<DetailsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
