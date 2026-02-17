import Counter from '../Counter';

export default {
  title: 'Components/Counter',
  args: {
    // Every Merkur story must have defined props property
    widget: {
      props: {},
    },
  },
};

const Template = (args, { loaded: { widget } }) => {
  return <Counter counter={widget.state.counter} />;
};

export const DefaultCounter = Template.bind({});

export const TenCounter = Template.bind({});
TenCounter.args = {
  widget: {
    props: {},
    // change default widget state from 0 to 10
    state: {
      counter: 10,
    },
  },
};
