module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb', // Uses the recommended rules from the eslint-config-airbnb
    'plugin:react/recommended', // Uses the recommended rules from the eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    "import/no-extraneous-dependencies": ['error', {'devDependencies': ['**/*.test.tsx', '**/*.spec.tsx']}],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.svg'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
