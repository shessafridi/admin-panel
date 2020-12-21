import * as React from 'react';
import {
  Edit,
  FormTab,
  TabbedForm,
  TabbedFormTabs,
  TextInput,
} from 'react-admin';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Redirect } from 'react-router';
import { TabsActions } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SaveToolbar from '../../common/SaveToolbar';
import MainContainer from '../../common/MainContainer';

const EditFooter: React.FC = (props: any) => {
  const tabsActions = React.useRef<any | TabsActions>();
  const open = useSelector((state: any) => state.admin.ui.sidebarOpen);

  // Recalculating tab indicator position due to a bug in MUI
  React.useEffect(() => {
    setTimeout(() => tabsActions.current?.updateIndicator(), 220);
  }, [open]);

  if (props.id !== '1') return <Redirect to={`/${props.resource}/1`} />;

  return (
    <MainContainer>
      <h3>Footer</h3>
      <p style={{ marginBottom: '50px' }}>
        Customized the footer of the website.
      </p>

      <Edit component='div' onSuccess={() => null} undoable={false} {...props}>
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
              fullWidth={true}
              source='about.aboutUs'
            />
          </FormTab>
          <FormTab icon={<MailOutlinedIcon />} label='Contact'>
            <TextInput
              label='Address'
              fullWidth={true}
              source='contact.address'
            />
            <TextInput label='Phone' fullWidth={true} source='contact.phone' />
            <TextInput label='Email' fullWidth={true} source='contact.email' />
          </FormTab>
          <FormTab icon={<InstagramIcon />} label='Social'>
            <TextInput
              label='Facebook'
              fullWidth={true}
              source='social.facebook'
            />
            <TextInput
              label='Instagram'
              fullWidth={true}
              source='social.instagram'
            />
            <TextInput
              label='Twitter'
              fullWidth={true}
              source='social.twitter'
            />
            <TextInput
              label='YouTube'
              fullWidth={true}
              source='social.youtube'
            />
          </FormTab>
          <FormTab icon={<StorefrontIcon />} label='Stores'>
            <TextInput
              label='App Store'
              fullWidth={true}
              source='stores.appStore'
            />
            <TextInput
              label='Play Store'
              fullWidth={true}
              source='stores.playStore'
            />
          </FormTab>
        </TabbedForm>
      </Edit>
    </MainContainer>
  );
};

export default EditFooter;
