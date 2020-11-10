import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../providers/data-provider/dataProvider';
import HeadersList from '../fields/headers/HeadersList';
import theme from '../theme/theme';
import CreateHeader from '../fields/headers/HeaderCreate';
import EditHeader from '../fields/headers/HeaderEdit';
import Dashboard from '../components/Dashboard';
import authProvider from '../providers/auth-provider/authProvider';
import EditFooter from '../fields/footer/FooterEdit';
import SingleResource from '../common/SingleResource';
import Menu from '../components/Menu';
import NoticeList from '../fields/notice-board/NoticeList';
import CreateNotice from '../fields/notice-board/NoticeCreate';
import EditNotice from '../fields/notice-board/NoticeEdit';
import AdminLayout from '../common/AdminLayout';
import EditAbout from '../fields/about/AboutEdit';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';

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
