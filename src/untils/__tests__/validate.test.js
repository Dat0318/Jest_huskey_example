const { validate } = require('jest-validate');

test('validate value: ', () => {
  const configByUser = {
    transform: '<rootDir>/node_modules/my-custom-transform',
  };

  const result = validate(configByUser, {
    comment: '  Documentation: http://custom-docs.com',
    exampleConfig: { transform: '<rootDir>/my-custom-transform' },
  });

  // console.log(result);
});

// read more: https://github.com/facebook/jest/blob/main/packages/jest-validate/README.md

//  to run heavy job, you can run with worker
// documentation and example: https://jestjs.io/docs/jest-platform#jest-worker

// Custom expect function in jest
// test('some test', () => {
//   function someFunctionWhichShouldThrow() {
//     if (false) {
//       throw new Error();
//     }

//     return 'success!';
//   }

//   expect(someFunctionWhichShouldThrow).toThrow();
// });
