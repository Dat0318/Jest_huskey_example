import defaultExport, { bar, foo, sum } from '../math';

jest.mock('../math', () => {
  const originalModule = jest.requireActual('../math');

  //Mock the default export and named export 'foo'
  return {
    ...originalModule,
    __esModule: true,
    foo: 'mocked foo',
    default: jest.fn(() => 'mocked baz'),
  };
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const defaultExportResult = defaultExport();

expect(defaultExport).toHaveBeenCalled();

test('should do a partial mock', () => {
  expect(defaultExportResult).toBe('mocked baz');

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});

const { diff } = require('jest-diff');

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 5 } } };

const result = diff(a, b);

// console.log(result);

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });
//
// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   //expect(value).toBe(0.3);           This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

// const { parseWithComments } = require('jest-docblock');

// const code = `
// /**
//  * This is a sample
//  *
//  * @flow
//  */

//  console.log('Hello World!');
// `;

// const parsed = parseWithComments(code);

// // prints an object with two attributes: comments and pragmas.
// console.log(parsed);
