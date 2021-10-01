import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function App() {
  const store = useSelector((store) => store);
  // const dispatch = useDispatch();

  console.log(store);

  return (
    <div className="App">
      Hi there!
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
}

export default App;
