import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});

window.store = store;

wrapStore(store, {
  portName: 'example'
});
