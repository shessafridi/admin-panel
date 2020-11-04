import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider from './data-provider/dataProvider';
import HeadersList from './fields/headers/HeadersList';
import { apiUrl } from './config';
import StarIcon from '@material-ui/icons/Star';
import theme from './theme/theme';
import CreateHeader from './fields/headers/HeaderCreate';
import EditHeader from './fields/headers/HeaderEdit';
import Dashboard from './components/Dashboard';
import authProvider from './auth-provider/authProvider';

function App() {
  return (
    <Admin
      theme={theme}
      title='Admin Panel'
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider(apiUrl)}
    >
      <Resource
        icon={StarIcon}
        options={{ label: 'Headers' }}
        name={'header'}
        list={HeadersList}
        create={CreateHeader}
        edit={EditHeader}
      ></Resource>
    </Admin>
  );
}

export default App;
