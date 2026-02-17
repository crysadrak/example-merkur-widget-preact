import Welcome from '../Welcome';

export default {
  title: 'Components/Welcome',
  args: {
    widget: {
      props: {},
    },
  },
};

const Template = () => {
  return <Welcome />;
};

export const Default = Template.bind({});
