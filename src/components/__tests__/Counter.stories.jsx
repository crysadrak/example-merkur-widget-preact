import Counter from '../Counter';
import WidgetContext from '../WidgetContext';

export default {
  title: 'Counter',
  args: {
    // Every Merkur story must have defined props property
    widget: {
      props: {},
    },
  },
};

const Template = (args, { loaded: { widget } }) => {
  return (
    <WidgetContext.Provider value={widget}>
      <Counter counter={widget.state.counter} />
    </WidgetContext.Provider>
  );
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
