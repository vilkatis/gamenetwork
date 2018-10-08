export class Utils {
  public static typeMap: {} = {};

  public static type(val: string): string {
    if (this.typeMap[val]) {
      throw new Error(`${val} is not unique.`);
    }
    this.typeMap[val] = true;
    return val;
  }
}
