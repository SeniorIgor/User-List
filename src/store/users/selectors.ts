// import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

export const selectUsersReducer = (state: RootState) => state.users;

// export const selectCartHidden = createSelector(
//   selectPeopleReducer,
//   (cart) => cart.hidden
// );
