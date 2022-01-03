import {createStore} from 'Redux';
import reducer from './reducers';

export const store = createStore(reducer);