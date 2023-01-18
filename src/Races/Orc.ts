import Race from './Race';

export default class Orc extends Race {
  readonly maxLifePoints: number = 74;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc._createdRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}