import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  public special: number;
  public cost: number;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract energyType: EnergyType;
}
