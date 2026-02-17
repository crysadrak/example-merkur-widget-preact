import { createPreviewConfig } from '@merkur/tool-storybook';
import widgetProperties from '../src/widget.js';
import { decorators } from './decorators.jsx';
import '../src/style.css';

const preview = {
  ...createPreviewConfig({
    widgetProperties,
    render(widget) {
      // This is called by the widget's update lifecycle
      // Trigger the forceUpdate stored on the widget by the decorator
      if (widget?.$in?._storybookForceUpdate) {
        widget.$in._storybookForceUpdate();
      }
    },
  }),
  decorators,
};

export default preview;
