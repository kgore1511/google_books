import './App.css';
import {homeScreen} from './Screens/homeScreen'
import {BookScreen} from './Screens/BookScreen'
import {BookDetailScreen} from './Screens/BookDetailScreen'
import {BrowserRouter,Route,Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  <Route path='/' exact={true} component={homeScreen}></Route>
  <Route path='/search' component={BookScreen}></Route>
  <Route path='/Book/:id' component={BookDetailScreen}></Route>
 
    </BrowserRouter>
  );
}

export default App;
