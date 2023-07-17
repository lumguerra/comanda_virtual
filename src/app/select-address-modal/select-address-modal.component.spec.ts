import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAddressModalComponent } from './select-address-modal.component';

describe('SelectAddressModalComponent', () => {
  let component: SelectAddressModalComponent;
  let fixture: ComponentFixture<SelectAddressModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAddressModalComponent]
    });
    fixture = TestBed.createComponent(SelectAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
