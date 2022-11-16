it('test async function: ', () => {});

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });

// test('the data is peanut butter', () => {
//   function callback(error, data) {
//     if (error) {
//       throw error;
//     }
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

// test('the data is peanut butter', (done) => {
//   function callback(error, data) {
//     if (error) {
//       done(error);
//       return;
//     }
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

// beforeAll(() => {
//   return initializeCityDatabase();
// });

// afterAll(() => {
//   return clearCityDatabase();
// });

// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });
