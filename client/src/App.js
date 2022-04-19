import './App.css';
import {HomeScreen} from './Screens/HomeScreen'
import {BookScreen} from './Screens/BookScreen'
import {BookDetailScreen} from './Screens/BookDetailScreen'
import {BrowserRouter,Route,Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  <Route path='/search' component={BookScreen}></Route>
  <Route path='/Book/:id' component={BookDetailScreen}></Route>
  <Route path='/' exact={true} component={HomeScreen}></Route>
    </BrowserRouter>
  );
}

export default App;
