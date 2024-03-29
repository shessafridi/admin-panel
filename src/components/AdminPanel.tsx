import React from 'react';
import { Admin, Resource } from 'react-admin';
import theme from '../theme/theme';
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
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';
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
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
//News
import NewsList from '../fields/news/NewsList';
import EditNews from '../fields/news/NewsEdit';
import CreateNews from '../fields/news/NewsCreate';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
// Featured
import EditFeatured from '../fields/featured/FeaturedEdit';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
// Media Center
import MediaList from '../fields/media-center/MediaList';
import EditMedia from '../fields/media-center/MediaEdit';
import CreateMedia from '../fields/media-center/MediaCreate';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';

//Admission
import AdmissionList from '../fields/admission/AdmissionList';
import SchoolIcon from '@material-ui/icons/School';
//Review
import ReviewList from '../fields/reviews/ReviewsList';
import EditReview from './../fields/reviews/ReviewsEdit';
import CreateReview from './../fields/reviews/ReviewsCreate';
import RateReviewIcon from '@material-ui/icons/RateReview';

import LoginPage from './LoginPage';
import loadFa from '../services/loadFa';

function AdminPanel() {
  loadFa();
  return (
    <Admin
      theme={theme}
      title='Admin Panel'
      dashboard={Dashboard}
      loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider()}
      menu={Menu}
      layout={AdminLayout}
    >
      <Resource
        icon={CallToActionOutlinedIcon}
        options={{ label: 'Headers' }}
        name={'header'}
        list={HeadersList}
        create={CreateHeader}
        edit={EditHeader}
      ></Resource>
      <Resource
        icon={SchoolIcon}
        options={{ label: 'Admissions' }}
        name={'admissions'}
        list={AdmissionList}
        // create={CreateHeader}
        // edit={EditHeader}
      ></Resource>

      <Resource
        icon={RateReviewIcon}
        options={{ label: 'Reviews' }}
        name={'reviews'}
        list={ReviewList}
        edit={EditReview}
        create={CreateReview}
      ></Resource>

      <Resource
        icon={EventNoteOutlinedIcon}
        options={{ label: 'News' }}
        name={'news'}
        list={NewsList}
        edit={EditNews}
        create={CreateNews}
      ></Resource>

      <Resource
        icon={CakeOutlinedIcon}
        options={{ label: 'Birthday' }}
        name={'birthday'}
        list={BirthdayList}
        edit={EditBirthday}
        create={CreateBirthday}
      ></Resource>

      <Resource
        icon={PermMediaOutlinedIcon}
        options={{ label: 'Media Center' }}
        name={'mediacenter'}
        list={MediaList}
        edit={EditMedia}
        create={CreateMedia}
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
        icon={FeaturedPlayListOutlinedIcon}
        options={{ label: 'Featured' }}
        name={'featured'}
        list={EditFeatured}
      ></Resource>

      <Resource
        icon={AccountBoxOutlinedIcon}
        options={{ label: 'About' }}
        name={'about'}
        list={EditAbout}
      ></Resource>

      <Resource
        icon={ListAltIcon}
        options={{ label: 'Footer' }}
        name={'footer'}
        list={EditFooter}
      ></Resource>
    </Admin>
  );
}

export default AdminPanel;
