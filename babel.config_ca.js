module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
      },
    ],
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
