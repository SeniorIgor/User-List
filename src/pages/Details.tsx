import { FC, useMemo } from 'react';

import { useTypedSelector } from '../hooks';
import { selectUserDetailsReducer } from '../store/user-details/selectors';

export const Details: FC = () => {
  const { data, loading, error } = useTypedSelector(selectUserDetailsReducer);

  const userDetails = useMemo(() => {
    if (!data) {
      return null;
    }

    const { name, birth_year, skin_color, mass } = data;

    return (
      <>
        <h1>{name}</h1>
        <h4>{birth_year}</h4>
        <p>Skin: ${skin_color}</p>
        <p>Mass: ${mass}</p>
      </>
    );
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );
  }

  return <div>{userDetails}</div>;
};
