const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';
const isNotProduction = NODE_ENV !== 'production';

export {
  isProduction,
  isNotProduction,
};
