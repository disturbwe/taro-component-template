/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: __dirname,
  setupFiles: ["<rootDir>/test/setup"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleNameMapper: {
    "@tarojs/components": "@tarojs/components/dist-h5/react",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.esm.js?$": "ts-jest",
  },
  transformIgnorePatterns: [
    // "<rootDir>/node_modules/(?!@taro)",
    "^.+\\.(css|sass|scss|less)$",
  ],
};
