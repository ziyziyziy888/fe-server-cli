import MCServer from '@mc/fe-server';
import config from 'config';

import userDefined from './middlewares/user-defined.js';
import routers from './middlewares/routers.js';

MCServer(config)
  .load(userDefined)
  .loadDefault()
  .load(routers.routes())
  .start();
