import Race from './Race';

export default class Dwarf extends Race {
  readonly maxLifePoints: number = 80;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf._createdRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
