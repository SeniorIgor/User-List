import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from '../Pagination';

import { useTypedSelector, useTypedDispatch } from '../../hooks';
import { selectUsersReducer } from '../../store/users/selectors';
import { loadUsersRequest } from '../../store/users/action-creators';

import Style from './PeopleTable.module.sass';

interface Props {}

export const PeopleTable: FC<Props> = () => {
  const { data, page, search } = useTypedSelector(selectUsersReducer);
  const dispatch = useTypedDispatch();

  const renderedPeople = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.results.map((character) => {
      const { name, birth_year, eye_color, gender, hair_color, height, url } =
        character;

      const id = character.url.replaceAll(/\D/g, '');

      return (
        <tr key={url}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{eye_color}</td>
          <td>{gender}</td>
          <td>{hair_color}</td>
          <td>{height}</td>
          <td>
            <Link to={`/people/${id}`}>Details</Link>
          </td>
        </tr>
      );
    });
  }, [data]);

  const handlePageChange = (newPage: number) => {
    dispatch(loadUsersRequest({ page: newPage, search }));
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
            <th />
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
