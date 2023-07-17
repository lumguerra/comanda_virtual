import { Component } from '@angular/core';

@Component({
  selector: 'app-select-address-modal',
  templateUrl: './select-address-modal.component.html',
  styleUrls: ['./select-address-modal.component.css']
})
export class SelectAddressModalComponent {
  openPopup() {
    (document.querySelector('.popup-bg') as HTMLElement).style.display = 'flex';
  }

  closePopup() {
    (document.querySelector('.popup-bg') as HTMLElement).style.display = 'none';
  }

  openAddAddressPopup() {
    (document.querySelector('.popup-adicionar-bg') as HTMLElement).style.display = 'flex';
    (document.querySelector('.popup-bg') as HTMLElement).style.display = 'none';
  }

}
