module.exports = {
  'stories': [
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5',
  },
}