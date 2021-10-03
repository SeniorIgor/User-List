// import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

export const selectPeopleReducer = (state: RootState) => state.people;

// export const selectCartHidden = createSelector(
//   selectPeopleReducer,
//   (cart) => cart.hidden
// );
