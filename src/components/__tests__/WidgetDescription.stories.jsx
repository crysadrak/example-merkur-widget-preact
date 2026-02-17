import WidgetDescription from '../WidgetDescription';

export default {
  title: 'Components/WidgetDescription',
  args: {
    widget: {
      props: {},
    },
  },
};

const Template = (args, { loaded: { widget } }) => {
  // Use custom name/version from args if provided, otherwise use widget defaults
  const name = args.name ?? widget.name;
  const version = args.version ?? widget.version;

  return <WidgetDescription name={name} version={version} />;
};

export const Default = Template.bind({});

export const CustomWidget = Template.bind({});
CustomWidget.args = {
  name: 'my-custom-widget',
  version: '2.0.0',
};
