import { createLogger } from 'redux-logger';

export default createLogger({
  titleFormatter: ({ type }, at, ms) => `${type} @ ${at} (${ms.toFixed(2)} ms)`,
});
