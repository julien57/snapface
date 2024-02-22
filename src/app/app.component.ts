import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {HeaderComponent} from "./header/header.component";
import {filter, interval, map, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, NgForOf, FaceSnapListComponent, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
  }
}
