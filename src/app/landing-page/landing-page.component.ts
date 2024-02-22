import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm) {
    console.log(form);
  }
}
