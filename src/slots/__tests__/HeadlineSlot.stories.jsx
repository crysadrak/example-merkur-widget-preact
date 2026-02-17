import HeadlineSlot from '../HeadlineSlot';

export default {
  title: 'Slots/HeadlineSlot',
  args: {
    widget: {
      props: {},
    },
  },
};

const Template = (args, { loaded: { widget } }) => {
  return <HeadlineSlot {...widget} />;
};

export const Default = Template.bind({});

export const WithHighCounter = Template.bind({});
WithHighCounter.args = {
  widget: {
    props: {},
    state: {
      counter: 42,
    },
  },
};
