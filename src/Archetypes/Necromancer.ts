import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  readonly energyType = 'mana';
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdRacesInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._createdRacesInstances;
  }
}