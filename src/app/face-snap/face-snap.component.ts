import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";

import { registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {
    // locale FR pour les date (config dans app.config.ts)
    registerLocaleData(fr.default);
  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
