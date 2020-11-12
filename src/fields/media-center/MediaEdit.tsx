import * as React from 'react';
import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import {
  ArrayInput,
  Edit,
  FileInput,
  FormDataConsumer,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  SimpleShowLayout,
  TextInput,
} from 'react-admin';
import IterableImageField from '../../common/IterableImageField';
import PaddedContainer from '../../common/PaddedContainer';
import BackButton from '../../common/BackButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    '& li': {
      flexDirection: 'column-reverse',
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
    '& li': {
      display: 'flex',
    },
    padding: '0',
    paddingBottom: '0 !important',
    gridTemplateColumns: '1fr',
  },
});

const EditMedia: React.FC = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>Edit Media</h2>
      </div>
      <Edit {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput label='Title' fullWidth={true} source='title' />
          <SimpleShowLayout
            className={
              isSmall ? `${classes.root} ${classes.small}` : classes.root
            }
          >
            <ImageField source='imageUrl' label='Image' />
            <FileInput
              accept='image/*'
              label='Upload Cover Image'
              source='imageUploaders.imageUrl'
            >
              <ImageField source='src' title='title' />
            </FileInput>
          </SimpleShowLayout>
          <FileInput
            accept='image/*'
            multiple={true}
            label='Upload Event Images'
            source='imageUploaders.gallery'
          >
            <ImageField source='src' title='title' />
          </FileInput>

          <ArrayInput source='gallery'>
            <SimpleFormIterator
              className={
                isSmall ? `${classes.root} ${classes.small}` : classes.root
              }
              removeButton={
                <Button
                  style={{ marginLeft: '20px', color: '#f44336' }}
                  startIcon={<DeleteIcon htmlColor='#f44336' />}
                >
                  Delete
                </Button>
              }
              disableAdd={true}
            >
              <FormDataConsumer>
                {({ scopedFormData }) => {
                  return <IterableImageField src={scopedFormData.imageUrl} />;
                }}
              </FormDataConsumer>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditMedia;
