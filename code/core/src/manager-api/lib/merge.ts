import { deepmerge } from 'deepmerge-ts';

import { logger } from '@storybook/core/client-logger';

export default <TObj = any>(a: TObj, b: Partial<TObj>) => {
  if (Array.isArray(a) && !Array.isArray(b)) {
    logger.log(['the types mismatch, picking', a]);
    return a;
  }

  return deepmerge(a, b);
};
