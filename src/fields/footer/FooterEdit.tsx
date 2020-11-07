import * as React from 'react';
import {
  Edit,
  FormTab,
  SaveButton,
  TabbedForm,
  TabbedFormTabs,
  TextInput,
  Toolbar,
} from 'react-admin';
import PaddedContainer from '../../common/PaddedContainer';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Redirect } from 'react-router';

const FooterditToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton disabled={props.saving && props.invalid} />
  </Toolbar>
);

const EditFooter: React.FC = (props: any) => {
  if (props.id !== '1') return <Redirect to='1' />;
  return (
    <PaddedContainer padding='10px'>
      <div>
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>Footer</h2>
      </div>
      <Edit {...props}>
        <TabbedForm
          margin='normal'
          tabs={<TabbedFormTabs centered={true} />}
          redirect={false}
          toolbar={<FooterditToolbar />}
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
    </PaddedContainer>
  );
};

export default EditFooter;
