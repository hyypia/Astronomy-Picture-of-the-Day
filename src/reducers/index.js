import { combineReducers } from 'redux';

import dayImageReducer from './dayImageReducer';

const rootReducer = combineReducers({
  dayImage: dayImageReducer,
});

export default rootReducer;
