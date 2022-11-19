//  Tam lam theo 3 useCase
// 1. Login success
// 2. wrong password
// 3. wrong username

export const json = [
  {
    params: {
      email: 'test1@gmail.com',
      password: '123456',
    },
    response: {
      status: 200,
      data: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTY2ODUwMzczOSwiZXhwIjoxNjY4NTA3MzM5LCJzdWIiOiIyIn0.Isvp4exHoe6UXOjmCMXCfau_ysdO-skkgiP5-hx_0aE',
        user: {
          email: 'test1@gmail.com',
          id: 2,
        },
      },
    },
  },
  {
    params: {
      email: 'test1@gmail.com',
      password: '1234567',
    },
    response: {
      status: 400,
      message: 'Incorrect password',
    },
  },
  {
    params: {
      email: 'test100@gmail.com',
      password: '123456',
    },
    response: {
      status: 400,
      message: 'Cannot find user',
    },
  },
];

export default json;
