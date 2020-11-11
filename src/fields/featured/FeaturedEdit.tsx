import * as React from 'react';
import {
  ArrayInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  SimpleShowLayout,
  TextInput,
} from 'react-admin';
import PaddedContainer from '../../common/PaddedContainer';
import { Redirect } from 'react-router';
import SaveToolbar from '../../common/SaveToolbar';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    '& li': {
      margin: '10px',
      borderRadius: '4px',
      border: '1px solid rgba(0,0,0,.1)',
      '& p': {
        display: 'none',
      },
      '& section': {
        padding: '10px 20px',
      },
    },
  },
  small: {
    padding: '0',
    paddingBottom: '0 !important',
    gridTemplateColumns: '1fr',
  },
});

const EditFeatured: React.FC = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  if (props.id !== '1') return <Redirect to={`/${props.resource}/1`} />;

  return (
    <PaddedContainer padding='10px'>
      <div>
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>Featured</h2>
      </div>
      <Edit {...props}>
        <SimpleForm toolbar={<SaveToolbar />} margin='normal' redirect={false}>
          <SimpleShowLayout
            className={
              isSmall ? `${classes.root} ${classes.small}` : classes.root
            }
          >
            <ImageField source='imageUrl' label='Image' />
            <FileInput
              accept='image/*'
              label='Upload Featured Image'
              source='imageUploaders.imageUrl'
            >
              <ImageField source='src' title='title' />
            </FileInput>
          </SimpleShowLayout>

          <ArrayInput source='cards'>
            <SimpleFormIterator
              className={
                isSmall ? `${classes.root} ${classes.small}` : classes.root
              }
              disableAdd={true}
              disableRemove={true}
            >
              <TextInput label='Card Title' fullWidth={true} source='title' />
              <TextInput
                label='Card Text'
                rows={6}
                multiline={true}
                fullWidth={true}
                source='text'
              />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditFeatured;
