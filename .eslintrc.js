module.exports = {
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: [
        './eslintrc/eslintrc.default.yml',
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-sparse-arrays': 'off',
    },
};
