import { FC, ChangeEventHandler } from 'react';
import classNames from 'classnames';

import { useTypedSelector, useTypedDispatch } from '../../hooks';
import { loadUsersRequest } from '../../store/users/action-creators';
import { selectUsersReducer } from '../../store/users/selectors';

import Style from './Search.module.sass';

interface Props {
  className?: string;
}

export const Search: FC<Props> = ({ className }) => {
  const { search } = useTypedSelector(selectUsersReducer);
  const dispatch = useTypedDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      loadUsersRequest({
        page: 1,
        search: event.target.value,
      })
    );
  };

  return (
    <form className={classNames(Style.form, className)}>
      <input
        className={Style.field}
        value={search}
        onChange={handleChange}
        placeholder="Search people..."
      />
    </form>
  );
};
