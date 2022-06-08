module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './components/'],
          ['@lib', './lib/'],
          ['@pages', './pages/'],
          ['@styles', './styles/'],
          ['@store', './store/'],
        ],
        extensions: ['.js'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'nonblock-statement-body-position': 'off',
    curly: 'off',
  },
}
