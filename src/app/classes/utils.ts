export class Utils {
  public static typeMap: {} = {};

  public static type(val: string): string {
    if (this.typeMap[val]) {
      throw new Error(`${val} is not unique.`);
    }
    this.typeMap[val] = true;
    return val;
  }

  public static keyBy<T>(array: T[], keyName: string): Record<string, T> {
    return array.reduce<Record<string, T>>((obj: Record<string, T>, item: T) => {
      return {
        ...obj,
        [item[keyName]]: item
      };
    }, {});
  }
}
