import ErrorView from '../ErrorView';

export default {
  title: 'Views/ErrorView',
  args: {
    widget: {
      props: {},
    },
    error: {
      status: 404,
      message: 'Not Found',
      stack: 'Error: Not Found\n    at someFunction (file.js:10:15)',
    },
  },
};

const Template = (args) => {
  return <ErrorView error={args.error} />;
};

export const NotFound = Template.bind({});

export const ServerError = Template.bind({});
ServerError.args = {
  error: {
    status: 500,
    message: 'Internal Server Error',
    stack: 'Error: Internal Server Error\n    at handler (server.js:42:10)',
  },
};

export const BadRequest = Template.bind({});
BadRequest.args = {
  error: {
    status: 400,
    message: 'Bad Request',
    stack: 'Error: Bad Request\n    at validateInput (validator.js:5:8)',
  },
};
