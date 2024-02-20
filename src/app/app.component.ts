import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {NgForOf} from "@angular/common";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, NgForOf, FaceSnapListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
