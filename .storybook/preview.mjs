import { h, render } from 'preact';
import { createPreviewConfig } from '@merkur/tool-storybook';
import widgetProperties from '../src/widget.js';
import View from '../src/views/View.jsx';
import HeadlineSlot from '../src/slots/HeadlineSlot.jsx';

// Create preview configuration with Merkur widget support
const preview = {
    ...createPreviewConfig({
        widgetProperties,
    }),
    // Preact render function
    render: (args, { loaded: { widget }, viewMode }) => {
        if (!widget) {
            return document.createElement('div');
        }

        const container = document.createElement('div');
        const ViewComponent = args.viewComponent === 'headline' ? HeadlineSlot : View;
        render(h(ViewComponent, widget), container);

        return container;
    },
};

export default preview;
