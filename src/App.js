import './Custom.css';
import './App.css'; 
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
// import Home from './Home';
import Register from './Register';
import Login from './Login';
import Create from './Create';
import Display from './Display';
import Update from './Update';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/register'> <Register /> </Route>
          <Route path='/login'> <Login /> </Route>
          <Route path='/create'> <Protected Cmp={Create} /> </Route>
          <Route path='/update/:id'> <Protected Cmp={Update} /> </Route>
          <Route path='/'> <Protected Cmp={Display} /> </Route>
          {/* <Route><Home /></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
