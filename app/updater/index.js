import { add } from './demo';

let updater = function(store, action, data, actionId, actionTime) {
  switch (action) {
    case 'add': return add(store, data, actionId, actionTime);
    default: return store;
  }
};

export { updater };
