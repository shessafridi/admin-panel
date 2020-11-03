import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider from './data-provider/dataProvider';
import HeadersList from './headers/HeadersList';
import { apiUrl } from './config';
import StarIcon from '@material-ui/icons/Star';

function App() {
  return (
    <Admin title='Admin Panel' dataProvider={dataProvider(apiUrl)}>
      <Resource
        icon={StarIcon}
        options={{ label: 'Headers' }}
        name={'header'}
        list={HeadersList}
      ></Resource>
    </Admin>
  );
}

export default App;
