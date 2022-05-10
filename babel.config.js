module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        { development: !api.env('production'), runtime: 'automatic' },
      ],
    ],
    ...(api.env('development') && { plugins: ['react-refresh/babel'] }),
  };
};
