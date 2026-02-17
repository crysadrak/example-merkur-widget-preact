import { useState, useEffect } from 'preact/hooks';
import WidgetContext from '../src/components/WidgetContext';

export const decorators = [
  (Story, { loaded: { widget } }) => {
    const [, forceUpdate] = useState(0);

    useEffect(() => {
      if (widget && widget.$in) {
        // Store the forceUpdate function on the widget so the render callback can trigger it
        widget.$in._storybookForceUpdate = () => forceUpdate((n) => n + 1);
      }
    }, [widget]);

    return (
      <WidgetContext.Provider value={widget}>
        <Story />
      </WidgetContext.Provider>
    );
  },
];