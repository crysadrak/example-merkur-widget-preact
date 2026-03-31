import { useEffect, useState } from 'preact/hooks';

import WidgetContext from '../src/components/WidgetContext';

export const decorators = [
  (Story, { loaded: { widget } }) => {
    const [, forceUpdate] = useState(0);

    useEffect(() => {
      if (!widget?.$external) {
        return undefined;
      }

      widget.$external.storybook = {
        // Provide a way for the render callback to trigger a re-render after syncing state/props back to the Controls panel.
        forceUpdate: () => forceUpdate((n) => n + 1),
      };

      return () => {
        if (widget.$external?.storybook) {
          delete widget.$external.storybook;
        }
      };
    }, [widget]);

    return (
      <WidgetContext.Provider value={widget}>
        <Story />
      </WidgetContext.Provider>
    );
  },
];
