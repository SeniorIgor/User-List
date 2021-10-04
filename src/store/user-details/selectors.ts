// import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

export const selectUserDetailsReducer = (state: RootState) => state.userDetails;

// export const selectCartHidden = createSelector(
//   selectPeopleReducer,
//   (cart) => cart.hidden
// );
