import commarise from "./commarise";

describe("commarise", () => {
  it.each([
    { value: 1000, formattedValue: "1k" },
    { value: 1000000, formattedValue: "1M" },
    { value: 1000000000, formattedValue: "1B" },
    { value: 1000000000000, formattedValue: "1T" },
  ])(
    "should return $value as $formattedValue correctly",
    ({ value, formattedValue }) => {
      expect(commarise(value)).toEqual(formattedValue);
    }
  );

  it.each([100, 10, 1])(
    "should return %d as its own value since it is lesser than 1e3 (1000)",
    () => {
      expect(commarise(100)).toEqual("100");
      expect(commarise(10)).toEqual("10");
      expect(commarise(1)).toEqual("1");
    }
  );
});
