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
}

export class Artisan {
  corpsDEtat: CorpsDEtat;
  entreprise: Entreprise;
}

export let reserves: Reserve[] = [
  {
    id: 1,
    viewtype: "A",
    x: 23,
    y: 25,
    statut: "En cours",
    piece: pieces[0],
    artisans: [
      {
        corpsDEtat: carnetAdresse[0].corpsDEtat,
        entreprise: carnetAdresse[0].entreprise
      }
    ],
    infoAdditionnelles: "info add 1",
    description: "Description blabla 1"
  },
  {
    id: 2,
    viewtype: "B",
    x: 50,
    y: 50,
    statut: "En cours",
    piece: pieces[1],
    artisans: [
      {
        corpsDEtat: carnetAdresse[1].corpsDEtat,
        entreprise: carnetAdresse[1].entreprise
      }
    ],
    infoAdditionnelles: "info add 2",
    description: "Description blabla 2"
  },
  {
    id: 3,
    viewtype: "C",
    x: 33,
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
    description: "Description blabla 3"
  }
];
