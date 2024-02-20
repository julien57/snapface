import {Component} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf,
  NgStyle, PercentPipe,
  registerLocaleData,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";

import * as fr from '@angular/common/locales/fr';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
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
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
    // locale FR pour les date (config dans app.config.ts)
    registerLocaleData(fr.default);
  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
