import { createLogger } from 'redux-logger';

export default createLogger({
  titleFormatter: (action, time, took) => `${action.type} @ ${time} (${took.toFixed(2)} ms)`,
});
