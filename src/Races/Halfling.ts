import Race from './Race';

export default class Halfling extends Race {
  readonly maxLifePoints: number = 60;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling._createdRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}