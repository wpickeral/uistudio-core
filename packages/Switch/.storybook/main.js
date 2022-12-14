module.exports = {
  'stories': [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  'addons': [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5',
  },
}