import * as React from 'react';
import {
  Edit,
  FormTab,
  TabbedForm,
  TabbedFormTabs,
  TextInput,
  useRefresh,
} from 'react-admin';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import { TabsActions } from '@material-ui/core/Tabs';
import { useSelector } from 'react-redux';
import SaveToolbar from '../../common/SaveToolbar';
import MainContainer from '../../common/MainContainer';

const EditFooter: React.FC = (props: any) => {
  const tabsActions = React.useRef<any | TabsActions>();
  const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
  const refresh = useRefresh();

  // Recalculating tab indicator position due to a bug in MUI
  React.useEffect(() => {
    setTimeout(() => tabsActions.current?.updateIndicator(), 220);
  }, [open]);

  return (
    <MainContainer>
      <h3 className='listview-title'>Footer</h3>
      <p style={{ marginBottom: '50px' }}>
        Customized the footer of the website.
      </p>

      <Edit
        id={1}
        component='div'
        onSuccess={() => refresh()}
        undoable={false}
        {...props}
      >
        <TabbedForm
          margin='normal'
          tabs={<TabbedFormTabs action={tabsActions} centered={true} />}
          redirect={false}
          toolbar={<SaveToolbar />}
        >
          <FormTab icon={<AccountBoxOutlinedIcon />} label='About'>
            <TextInput
              multiline={true}
              rows={8}
              label='About Text'
              fullWidth
              source='about.aboutUs'
            />
          </FormTab>
          <FormTab icon={<MailOutlinedIcon />} label='Contact'>
            <TextInput label='Address' fullWidth source='contact.address' />
            <TextInput label='Phone' fullWidth source='contact.phone' />
            <TextInput label='Email' fullWidth source='contact.email' />
          </FormTab>
          <FormTab icon={<InstagramIcon />} label='Social'>
            <TextInput label='Facebook' fullWidth source='social.facebook' />
            <TextInput label='Instagram' fullWidth source='social.instagram' />
            <TextInput label='Twitter' fullWidth source='social.twitter' />
            <TextInput label='YouTube' fullWidth source='social.youtube' />
          </FormTab>
          <FormTab icon={<StorefrontIcon />} label='Stores'>
            <TextInput label='App Store' fullWidth source='stores.appStore' />
            <TextInput label='Play Store' fullWidth source='stores.playStore' />
          </FormTab>
        </TabbedForm>
      </Edit>
    </MainContainer>
  );
};

export default EditFooter;
