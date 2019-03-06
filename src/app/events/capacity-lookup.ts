import {Capacity} from './capacity.model';

export class CapacityLookup {

  private static readonly values = new Map<number, string>([
    [0, 'Small (< 20)'],
    [1, 'Medium (< 100)'],
    [2, 'Big (100+)']
  ]);

  public static toArray(): Capacity[] {
    return Array.from(CapacityLookup.values.entries()).map(([id, name]) => ({id, name} as Capacity));
  }

  public static nameById(id: number): string {
    return CapacityLookup.values.get(id);
  }

}
