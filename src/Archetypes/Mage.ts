import Archetype from './Archetype';

export default class Mage extends Archetype {
  readonly energyType = 'mana';
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdRacesInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._createdRacesInstances;
  }
}