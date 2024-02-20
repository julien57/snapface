import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  'providedIn': 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg',
      createdDate: new Date(),
      snaps: 150,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Joli paysage',
      description: 'Ce paysage est magnifique',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'La montagne'
    },
    {
      id: 3,
      title:  'Un objet',
      description: 'Un objet bien pratique',
      imageUrl: 'https://cdn.pixabay.com/photo/2012/03/01/01/06/battery-19983_1280.jpg',
      createdDate: new Date(),
      snaps: 8
    },
    {
      id: 4,
      title: 'Archibald copy',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg',
      createdDate: new Date(),
      snaps: 54,
      location: 'Paris'
    },
    {
      id: 5,
      title: 'Joli paysage copy',
      description: 'Ce paysage est magnifique',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg',
      createdDate: new Date(),
      snaps: 204,
      location: 'La montagne'
    },
    {
      id: 6,
      title:  'Un objet copy',
      description: 'Un objet bien pratique',
      imageUrl: 'https://cdn.pixabay.com/photo/2012/03/01/01/06/battery-19983_1280.jpg',
      createdDate: new Date(),
      snaps: 29
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    let faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }

    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): void {
    let faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
