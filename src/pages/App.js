import { useTypedSelector } from '../hooks';
import { selectPeopleReducer } from '../store/people/selectors';

import { PeopleTable } from '../components/PeopleTable';
import { Search } from '../components/Search';

function App() {
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

      <Search />

      {renderedContent()}

      <div></div>
    </div>
  );
}

export default App;
