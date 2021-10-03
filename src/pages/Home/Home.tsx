import { FC } from 'react';

import { useTypedSelector } from '../../hooks';
import { selectPeopleReducer } from '../../store/people/selectors';

import { PeopleTable } from '../../components/PeopleTable';
import { Search } from '../../components/Search';

import Style from './Home.module.sass';

export const Home: FC = () => {
  const { loading, error } = useTypedSelector(selectPeopleReducer);

  const renderedContent = () => {
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

    return <PeopleTable />;
  };

  return (
    <div className="container">
      <h1>Star Wars People</h1>

      <Search className={Style.search} />

      {renderedContent()}

      <div></div>
    </div>
  );
};
