export default abstract class Race {
  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    this.name = name;
    this.dexterity = dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints: number;
}
