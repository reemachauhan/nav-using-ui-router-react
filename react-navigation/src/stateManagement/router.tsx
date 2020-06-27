import React from 'react';
import {UIRouterReact, servicesPlugin, hashLocationPlugin} from '@uirouter/react';
import actions from './States';

//Create router instance and setup
const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(hashLocationPlugin);

actions.forEach(state => router.stateRegistry.register(state));

//Set initial and fallback states
router.urlService.rules.initial({ state: 'landing' });

export default router;
