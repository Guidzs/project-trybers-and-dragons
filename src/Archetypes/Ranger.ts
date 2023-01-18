import Archetype from './Archetype';

export default class Ranger extends Archetype {
  readonly energyType = 'stamina';
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdRacesInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._createdRacesInstances;
  }
}