import { FC, ChangeEventHandler } from 'react';
import classNames from 'classnames';

import { useTypedSelector, useTypedDispatch } from '../../hooks';
import { fetchUsersRequest } from '../../store/people/action-creators';
import { selectPeopleReducer } from '../../store/people/selectors';

import Style from './Search.module.sass';

interface Props {
  className: string;
  onChange: (search: string) => void;
}

export const Search: FC<Props> = ({ className }) => {
  const { search } = useTypedSelector(selectPeopleReducer);
  const dispatch = useTypedDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      fetchUsersRequest({
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
