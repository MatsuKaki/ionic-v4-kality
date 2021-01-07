export class Piece {
  public id: number;
  public name: string;
  public weigth: number;
}

export let pieces: Piece[] = [
  { id: 1, name: "Séjour", weigth: 27592 },
  { id: 2, name: "Salle de bains 1", weigth: 25868 },
  { id: 3, name: "Chambre 1", weigth: 19543 },
  { id: 4, name: "Cuisine", weigth: 17359 },
  { id: 5, name: "Entrée", weigth: 15894 },
  { id: 6, name: "Ensemble du logement", weigth: 12099 },
  { id: 7, name: "Terrasse", weigth: 11127 },
  { id: 8, name: "Chambre 2", weigth: 8607 },
  { id: 9, name: "Salle d'eau", weigth: 8027 },
  { id: 10, name: "WC", weigth: 7837 },
  { id: 11, name: "Couloir", weigth: 7443 },
  { id: 12, name: "Balcon", weigth: 5975 },
  { id: 13, name: "Extérieur", weigth: 4628 },
  { id: 14, name: "Dégagement", weigth: 4367 },
  { id: 15, name: "Escalier 1", weigth: 4350 },
  { id: 16, name: "Hall", weigth: 4117 },
  { id: 17, name: "Chambre 3", weigth: 3210 },
  { id: 18, name: "Bureau", weigth: 2405 },
  { id: 19, name: "Façade", weigth: 2394 },
  { id: 20, name: "Garage", weigth: 1934 },
  { id: 21, name: "Palier", weigth: 1920 },
  { id: 22, name: "Sous sol", weigth: 1819 },
  { id: 23, name: "Loggia", weigth: 1688 },
  { id: 24, name: "Salon", weigth: 1686 },
  { id: 25, name: "Parking", weigth: 1587 },
  { id: 26, name: "Dégagement étage", weigth: 1491 },
  { id: 27, name: "Jardin", weigth: 1403 },
  { id: 28, name: "Façade avant", weigth: 1011 },
  { id: 29, name: "Cellier", weigth: 966 },
  { id: 30, name: "Salle de bains 2", weigth: 947 },
  { id: 31, name: "Façade arrière", weigth: 862 },
  { id: 32, name: "Placard", weigth: 692 },
  { id: 33, name: "Toiture", weigth: 658 },
  { id: 34, name: "Dégagement rez-de-chaussée", weigth: 632 },
  { id: 35, name: "Local technique", weigth: 587 },
  { id: 36, name: "Chambre 4", weigth: 563 },
  { id: 37, name: "Façade sur rue", weigth: 530 },
  { id: 38, name: "Rangement", weigth: 514 },
  { id: 39, name: "Local poubelles", weigth: 472 },
  { id: 40, name: "Local vélos", weigth: 472 },
  { id: 41, name: "W-C étage", weigth: 440 },
  { id: 42, name: "Sanitaire 1", weigth: 390 },
  { id: 43, name: "Escalier 2", weigth: 374 },
  { id: 44, name: "Ascenseur", weigth: 367 },
  { id: 45, name: "W-C rez-de-chaussée", weigth: 314 },
  { id: 46, name: "Chaufferie", weigth: 284 },
  { id: 47, name: "Balcon 1", weigth: 275 },
  { id: 48, name: "Dressing 1", weigth: 238 },
  { id: 49, name: "Porte", weigth: 233 },
  { id: 50, name: "Salle à manger", weigth: 224 },
  { id: 51, name: "Lingerie", weigth: 222 },
  { id: 52, name: "Gaine technique", weigth: 216 },
  { id: 53, name: "Combles", weigth: 188 },
  { id: 54, name: "Local chaufferie", weigth: 181 },
  { id: 55, name: "Balcon 2", weigth: 161 },
  { id: 56, name: "Salle de réunion", weigth: 157 },
  { id: 57, name: "Cave", weigth: 142 },
  { id: 58, name: "Local agent entretien", weigth: 123 },
  { id: 59, name: "Sanitaire 2", weigth: 119 },
  { id: 60, name: "W-C 2", weigth: 112 },
  { id: 61, name: "Portail résidence", weigth: 110 },
  { id: 62, name: "Box", weigth: 96 },
  { id: 63, name: "Local commercial", weigth: 96 },
  { id: 64, name: "Pignon gauche", weigth: 77 },
  { id: 65, name: "Pignon droit", weigth: 76 },
  { id: 66, name: "Entrée 2", weigth: 65 },
  { id: 67, name: "Local encombrant", weigth: 54 },
  { id: 68, name: "Porche", weigth: 49 },
  { id: 69, name: "Vestiaires/douches", weigth: 42 },
  { id: 70, name: "Vide sur séjour", weigth: 42 },
  { id: 71, name: "Cabinet Médical", weigth: 28 },
  { id: 72, name: "Espace créativité", weigth: 19 },
  { id: 73, name: "Stockage", weigth: 19 },
  { id: 74, name: "Patio", weigth: 18 },
  { id: 75, name: "Auvent", weigth: 17 },
  { id: 76, name: "Palier 2", weigth: 17 },
  { id: 77, name: "Salle de jeux", weigth: 16 },
  { id: 78, name: "Abris de jardin", weigth: 15 },
  { id: 79, name: "Dressing 2", weigth: 14 },
  { id: 80, name: "Salle de bains 3", weigth: 13 },
  { id: 81, name: "Descente EP", weigth: 9 },
  { id: 82, name: "Mezzanine", weigth: 9 },
  { id: 83, name: "Extension", weigth: 6 },
  { id: 84, name: "Radiateur", weigth: 5 },
  { id: 85, name: "Sanitaire 3", weigth: 5 },
  { id: 86, name: "Chambre 6", weigth: 4 },
  { id: 87, name: "Courrier", weigth: 4 },
  { id: 88, name: "Grenier", weigth: 4 },
  { id: 89, name: "Chambre 5", weigth: 2 },
  { id: 90, name: "Lucarne", weigth: 1 },
  { id: 91, name: "W-C 3", weigth: 1 }
];

export class PieceProvider {
  constructor() {}

  filter(text: string) {
    let matchingPieces: Piece[];
    matchingPieces = pieces.filter((a, b, c) => this.matches(a, b, c, text));
    matchingPieces.sort(this.sortWeight);
    matchingPieces = matchingPieces.slice(0, 19);
    matchingPieces.sort(this.sortName);
    return matchingPieces;
  }

  private matches(element, index, array, text) {
    let result: number;
    result = element.name.indexOf(text);
    return result > -1;
  }

  private sortWeight(obj1: Piece, obj2: Piece) {
    let result: number = 1;
    if (obj1.weigth > obj2.weigth) {
      result = -1;
    } else if (obj1.weigth == obj2.weigth) {
      result = 0;
    }
    return result;
  }

  private sortName(obj1: Piece, obj2: Piece) {
    let result: number = 1;
    if (obj1.name < obj2.name) {
      result = -1;
    } else if (obj1.name == obj2.name) {
      result = 0;
    }
    return result;
  }
}
