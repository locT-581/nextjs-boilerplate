import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './users/userSlice';

export default combineReducers({
  userSlice,
});
