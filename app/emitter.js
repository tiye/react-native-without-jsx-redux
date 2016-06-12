import EventEmitter from 'EventEmitter';
import Immutable from 'immutable';

let globalEmitter = new EventEmitter();

let register = fn => globalEmitter.addListener('bus', fn);

let unregisterAll = () => globalEmitter.removeAllListeners('bus');

let dispatch = (action, data) => globalEmitter.emit('bus', Immutable.fromJS([action, data]));

export { register };
export { unregisterAll };
export { dispatch };
