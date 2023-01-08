/**
 * Map the value of a number to it's named value
 *
 * @param number
 * @param min
 */
export const commarise = (number: number, min: number = 1e3): string => {
  if (number >= min) {
    const units: string[] = ["k", "M", "B", "T"];

    const order: number = Math.floor(Math.log(number) / Math.log(1000));

    const unitName: string = units[order - 1];
    const num: number = Number((number / 1000 ** order).toFixed(2));

    return num + unitName;
  }

  return number.toLocaleString();
};

export default commarise;
