import React from 'react';
import { Admin, Resource,fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './shared/auth/authProvider';
import Menu from './shared/layouts/Menu';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import { UserList } from './components/Users';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
import dataProvider from './shared/providers/dataProvider';


import Login from './components/Login'
import Logout from './components/Logout';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const App = () => (
  <Admin title="TEDU" dashboard={Dashboard}
  menu={Menu}
  loginPage={Login} logoutButton={Logout} 
  catchAll={NotFound}
    authProvider={authProvider}
    dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;