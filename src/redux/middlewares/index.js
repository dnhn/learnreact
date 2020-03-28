import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from './logger';

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV !== 'production') middleware.push(logger);

export default middleware;
