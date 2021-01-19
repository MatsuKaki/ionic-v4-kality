import { Piece, pieces } from "./pieces.provider";
import {
  carnetAdresse,
  CorpsDEtat,
  Entreprise
} from "./carnetadresse.provider";

export class Reserve {
  id: number;
  viewtype: string;
  x: number;
  y: number;
  statut: string;
  piece: Piece;
  artisans: Artisan[];
  infoAdditionnelles: string;
  description: string;
  images: string[];
  dateCreation: string;
  dateModification: string;
  dateValidationOR: string;
  dateCloture: string;
}

export class Artisan {
  corpsDEtat: CorpsDEtat;
  entreprise: Entreprise;
}

export let reserves: Reserve[] = [
  {
    id: 1,
    viewtype: "A",
    x: 325,
    y: 325,
    statut: "En cours",
    piece: pieces[0],
    artisans: [
      {
        corpsDEtat: carnetAdresse[0].corpsDEtat,
        entreprise: carnetAdresse[0].entreprise
      }
    ],
    infoAdditionnelles: "info add 1",
    description: "Description blabla 1",
    images: [
      "https://stackblitz.com/files/ionic-v4-kality/github/MatsuKaki/ionic-v4-kality/master/src/app/pages/kality/pictures/IMG_2984.JPG",
      "https://stackblitz.com/files/ionic-v4-kality/github/MatsuKaki/ionic-v4-kality/master/src/app/pages/kality/pictures/IMG_2985.JPG"
    ],
    dateCreation: "2020-01-16",
    dateModification: "2020-01-17",
    dateValidationOR: null,
    dateCloture: null
  },
  {
    id: 2,
    viewtype: "B",
    x: 567,
    y: 200,
    statut: "En cours",
    piece: pieces[1],
    artisans: [
      {
        corpsDEtat: carnetAdresse[1].corpsDEtat,
        entreprise: carnetAdresse[1].entreprise
      }
    ],
    infoAdditionnelles: "info add 2",
    description: "Description blabla 2",
    images: [],
    dateCreation: "2020-01-16",
    dateModification: "2020-01-17",
    dateValidationOR: null,
    dateCloture: null
  },
  {
    id: 3,
    viewtype: "C",
    x: 789,
    y: 70,
    statut: "Levee",
    piece: pieces[2],
    artisans: [
      {
        corpsDEtat: carnetAdresse[2].corpsDEtat,
        entreprise: carnetAdresse[2].entreprise
      }
    ],
    infoAdditionnelles: "info add 3",
    description: "Description blabla 3",
    images: [],
    dateCreation: "2020-01-16",
    dateModification: "2020-01-17",
    dateValidationOR: "2020-01-17",
    dateCloture: "2020-01-20"
  },
  {
    id: 4,
    viewtype: "C",
    x: 789,
    y: 70,
    statut: "Levee",
    piece: pieces[2],
    artisans: [
      {
        corpsDEtat: carnetAdresse[2].corpsDEtat,
        entreprise: carnetAdresse[2].entreprise
      }
    ],
    infoAdditionnelles: "info add 4",
    description: "Description blabla 4",
    images: [],
    dateCreation: "2020-01-16",
    dateModification: "2020-01-17",
    dateValidationOR: "2020-01-17",
    dateCloture: "2020-01-20"
  }
];
