import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider from './data-provider/dataProvider';
import HeadersList from './fields/headers/HeadersList';
import { apiUrl } from './config';
import StarIcon from '@material-ui/icons/Star';
import theme from './theme/theme';
import CreateHeader from './fields/headers/HeaderCreate';

function App() {
  return (
    <Admin
      theme={theme}
      title='Admin Panel'
      dataProvider={dataProvider(apiUrl)}
    >
      <Resource
        icon={StarIcon}
        options={{ label: 'Headers' }}
        name={'header'}
        list={HeadersList}
        create={CreateHeader}
      ></Resource>
    </Admin>
  );
}

export default App;
