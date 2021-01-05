export class CorpsDEtat {
  public id: number;
  public name: string;
  public weigth: number;
}

export class Entreprise {
  public id: number;
  public name: string;
}

export class LigneCarnetAdresse {
  public id: number;
  public corpsDEtat: CorpsDEtat;
  public entreprise: Entreprise;
}

