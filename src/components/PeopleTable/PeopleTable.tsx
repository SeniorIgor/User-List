import { FC, useMemo } from 'react';

import { Pagination } from '../Pagination';

import { useTypedSelector, useTypedDispatch } from '../../hooks';
import { selectPeopleReducer } from '../../store/people/selectors';
import { fetchUsersRequest } from '../../store/people/action-creators';

import Style from './PeopleTable.module.sass';

interface Props {}

export const PeopleTable: FC<Props> = () => {
  const { data, page, search } = useTypedSelector(selectPeopleReducer);
  const dispatch = useTypedDispatch();

  const renderedPeople = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.results.map((character) => {
      const { name, birth_year, eye_color, gender, hair_color, height, url } =
        character;

      return (
        <tr key={url}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{eye_color}</td>
          <td>{gender}</td>
          <td>{hair_color}</td>
          <td>{height}</td>
        </tr>
      );
    });
  }, [data]);

  const handlePageChange = (newPage: number) => {
    dispatch(fetchUsersRequest({ page: newPage, search }));
  };

  return (
    <>
      <table
        className={Style.table}
        width="100%"
        cellPadding={2}
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth year</th>
            <th>Eye color</th>
            <th>Gender</th>
            <th>Hair color</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>{renderedPeople}</tbody>
      </table>

      <Pagination
        className={Style.pagination}
        page={page}
        total={data ? data.count : 0}
        onChange={handlePageChange}
      />
    </>
  );
};
