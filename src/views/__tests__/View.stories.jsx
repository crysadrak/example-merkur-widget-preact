import View from '../View';

export default {
  title: 'Views/View',
  args: {
    widget: {
      props: {},
    },
  },
};

const Template = (args, { loaded: { widget } }) => {
  return <View {...widget} />;
};

export const Default = Template.bind({});

export const WithHighCounter = Template.bind({});
WithHighCounter.args = {
  widget: {
    props: {},
    state: {
      counter: 100,
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  widget: {
    props: {},
    error: {
      status: 500,
      message: 'Something went wrong',
      stack: 'Error: Something went wrong\n    at View (view.js:15:20)',
    },
  },
};
