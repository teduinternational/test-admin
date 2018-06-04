import React from 'react';
import { Admin, Resource } from 'react-admin';

import authProvider from './shared/auth/authProvider';
// import Menu from './shared/layouts/Menu';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import PostIcon from '@material-ui/icons/Book';
import dataProvider from './shared/providers/dataProvider';


import Login from './components/Login'
import Logout from './components/Logout';

const App = () => (
  <Admin title="TEDU" dashboard={Dashboard}
    // menu={Menu}
    loginPage={Login} logoutButton={Logout}
    catchAll={NotFound}
    authProvider={authProvider}
    dataProvider={dataProvider}>
    <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;