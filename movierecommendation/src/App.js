import React from 'react'
import Header from './common/Header'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login/index'
import User from './pages/user/index'
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/user" exact component={User}></Route>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
