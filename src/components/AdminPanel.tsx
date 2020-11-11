import React from 'react';
import { Admin, Resource } from 'react-admin';
import theme from '../theme/theme';
import SingleResource from '../common/SingleResource';
import Menu from '../components/Menu';
import AdminLayout from './AdminLayout';

//Providers
import dataProvider from '../providers/data-provider/dataProvider';
import authProvider from '../providers/auth-provider/authProvider';

// Dashboard
import Dashboard from '../components/Dashboard';
// Headers
import HeadersList from '../fields/headers/HeadersList';
import CreateHeader from '../fields/headers/HeaderCreate';
import EditHeader from '../fields/headers/HeaderEdit';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
// Notice Board
import NoticeList from '../fields/notice-board/NoticeList';
import CreateNotice from '../fields/notice-board/NoticeCreate';
import EditNotice from '../fields/notice-board/NoticeEdit';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
// About
import EditAbout from '../fields/about/AboutEdit';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
// Footer
import EditFooter from '../fields/footer/FooterEdit';
import ListAltIcon from '@material-ui/icons/ListAlt';
// Birthday
import BirthdayList from '../fields/birthday/BirthdayList';
import CreateBirthday from '../fields/birthday/BirthdayCreate';
import EditBirthday from '../fields/birthday/BirthdayEdit';
import CakeIcon from '@material-ui/icons/Cake';

function AdminPanel() {
  return (
    <Admin
      theme={theme}
      title='Admin Panel'
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider()}
      menu={Menu}
      layout={AdminLayout}
    >
      <Resource
        icon={StarsOutlinedIcon}
        options={{ label: 'Headers' }}
        name={'header'}
        list={HeadersList}
        create={CreateHeader}
        edit={EditHeader}
      ></Resource>

      <Resource
        icon={CakeIcon}
        options={{ label: 'Birthday' }}
        name={'birthday'}
        list={BirthdayList}
        edit={EditBirthday}
        create={CreateBirthday}
      ></Resource>

      <Resource
        icon={ViewAgendaOutlinedIcon}
        options={{ label: 'Notice Board' }}
        name={'noticeboard'}
        list={NoticeList}
        edit={EditNotice}
        create={CreateNotice}
      ></Resource>

      <Resource
        icon={AccountBoxOutlinedIcon}
        options={{ label: 'About' }}
        name={'about'}
        list={SingleResource}
        edit={EditAbout}
      ></Resource>

      <Resource
        icon={ListAltIcon}
        options={{ label: 'Footer' }}
        name={'footer'}
        list={SingleResource}
        edit={EditFooter}
      ></Resource>
    </Admin>
  );
}

export default AdminPanel;
