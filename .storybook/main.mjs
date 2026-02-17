const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  features: {
    onboarding: false,
  },
  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
  async viteFinal(config) {
    config.esbuild = {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import { h, Fragment } from 'preact'`,
    };
    return config;
  },
};

export default config;
