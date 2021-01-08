import { combineReducers } from 'redux';

import dayImageReducer from './dayImageReducer';
import mediaReducer from './mediaReducer';

const rootReducer = combineReducers({
  dayImage: dayImageReducer,
  media: mediaReducer,
});

export default rootReducer;
