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
import { Redirect } from 'react-router';
import SaveToolbar from '../../common/SaveToolbar';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import MainContainer from '../../common/MainContainer';

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
    <MainContainer>
      <h3>Featured</h3>
      <p>Customized the featured section of the website.</p>

      <Edit component='div' onSuccess={() => null} undoable={false} {...props}>
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
              <TextInput label='Card Title' fullWidth source='title' />
              <TextInput
                label='Card Text'
                rows={6}
                multiline={true}
                fullWidth
                source='text'
              />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Edit>
    </MainContainer>
  );
};

export default EditFeatured;