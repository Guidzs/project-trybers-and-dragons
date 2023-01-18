import Archetype from './Archetype';

export default class Warrior extends Archetype {
  readonly energyType = 'stamina';
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdRacesInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._createdRacesInstances;
  }
}