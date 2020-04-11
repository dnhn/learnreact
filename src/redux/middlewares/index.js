import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from './logger';
import { isNotProduction } from '../../commons/utils';

const middleware = [...getDefaultMiddleware()];

if (isNotProduction) middleware.push(logger);

export default middleware;
