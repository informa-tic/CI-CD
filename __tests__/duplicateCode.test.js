import {sum, mult, rest} from '../src/duplicateCode'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 1 * 2 to equal 3', () => {
    expect(mult(1, 2)).toBe(2);
  });

  test('adds 1 -. 2 to equal 3', () => {
    expect(rest(1, 2)).toBe(-1);
  });