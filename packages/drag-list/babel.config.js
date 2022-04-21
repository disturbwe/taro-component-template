module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    ["taro", { framework: "react", ts: true }],
    "@babel/preset-typescript",
  ],
};
