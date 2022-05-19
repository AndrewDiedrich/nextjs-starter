module.exports = {
    stories: [
      '../src/**/*.story.@(js|jsx|ts|tsx)',
    ],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      'storybook-addon-next',
      '@storybook/addon-controls',
    ],
    framework: '@storybook/react',
    core: {
      builder: 'webpack5',
    },
  }