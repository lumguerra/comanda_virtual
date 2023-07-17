import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-address-modal',
  templateUrl: './edit-address-modal.component.html',
  styleUrls: ['./edit-address-modal.component.css']
})

export class EditAddressModalComponent {
  closePopup() {
    (document.querySelector('.popup-adicionar-bg') as HTMLElement).style.display = 'none';
  }
}
