import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapComponent} from "../face-snap/face-snap.component";
import {NgForOf} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.service";
import {interval, map, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    NgForOf
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
        takeUntil(this.destroy$),
        tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
