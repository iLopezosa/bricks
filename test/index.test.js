const build = require("../src/index.js");

const wall1_1 = '■■';
const wall1_2 = '■■|■■';
const wall2_1 = `■|■\n■■`;
const wall2_2 = '■|■■|■\n■■|■■';
const wall5_5 =
  `■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■`;
const wall10_7 =
  `■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■
■|■■|■■|■■|■■|■■|■■|■
■■|■■|■■|■■|■■|■■|■■`;

describe("Walls", () => {
  test(`build(1, 1) should return:\n${wall1_1}`, () => {
    expect(build(1, 1)).toBe(wall1_1);
  });

  test(`build(1, 2) should return:\n${wall1_2}`, () => {
    expect(build(1, 2)).toBe(wall1_2);
  });

  test(`build(2, 1) should return:\n${wall2_1}`, () => {
    expect(build(2, 1)).toBe(wall2_1);
  });

  test(`build(2, 2) should return:\n${wall2_2}`, () => {
    expect(build(2, 2)).toBe(wall2_2);
  });

  test(`build(5, 5) should return:\n${wall5_5}`, () => {
    expect(build(5, 5)).toBe(wall5_5);
  });

  test(`build(10, 7) should return:\n${wall10_7}`, () => {
    expect(build(10, 7)).toBe(wall10_7);
  });
});

describe("Errors", () => {
  test("build() should return null", () => {
    expect(build()).toBe(null);
  });

  test("build(0, 0) should return null", () => {
    expect(build(0, 0)).toBe(null);
  });

  test('build("eight") should return null', () => {
    expect(build("eight")).toBe(null);
  });

  test("build(12, -4) should return null", () => {
    expect(build(12, -4)).toBe(null);
  });
});