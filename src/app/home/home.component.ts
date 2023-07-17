import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  goToAbout() {
    window.location.href = "about.html";
  }

  goToFood() {
    window.location.href = "food.html";
  }

  scrollToSection() {
    const selectedDay = (document.getElementById("daySelect") as HTMLInputElement).value!;
    const sectionElement = document.getElementById(selectedDay)! as HTMLElement;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    const offsetPosition = sectionElement.offsetTop - 75;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
