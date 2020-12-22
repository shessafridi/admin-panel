import * as React from 'react';
import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import {
  ArrayInput,
  DateInput,
  Edit,
  FileInput,
  FormDataConsumer,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';
import IterableImageField from '../../common/IterableImageField';
import DeleteIcon from '@material-ui/icons/Delete';
import YouTubePlayer from '../../common/YouTubePlayer';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/DialogToolbar';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr 1fr',
    '& li': {
      flexDirection: 'column-reverse',
      margin: '4px',
      borderRadius: '4px',
      border: '1px solid rgba(0,0,0,.1)',
      '& p': {
        display: 'none',
      },
      '& section': {
        padding: '4px 10px',
      },
    },
  },
  small: {
    '& li': {
      display: 'flex',
    },
    padding: '0',
    paddingBottom: '0 !important',
    gridTemplateColumns: '1fr 1fr',
  },
});

const EditMedia: React.FC = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput label='Title' fullWidth source='title' />
              <DateInput label='Date' fullWidth source='date' />
            </RaGrid>

            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <ImageField source='imageUrl' label='Image' />
              <FileInput
                accept='image/*'
                label='Upload Cover Image'
                source='imageUploaders.imageUrl'
              >
                <ImageField source='src' title='title' />
              </FileInput>
            </RaGrid>

            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <FileInput
                accept='image/*'
                multiple={true}
                label='Upload Event Images'
                source='imageUploaders.gallery'
              >
                <ImageField source='src' title='title' />
              </FileInput>
            </RaGrid>

            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <ArrayInput label='Add YouTube Link' source='mergeFields.gallery'>
                <SimpleFormIterator
                  removeButton={
                    <IconButton style={{ marginLeft: '6px', color: '#f44336' }}>
                      <DeleteIcon htmlColor='#f44336' />
                    </IconButton>
                  }
                  addButton={
                    <Button color='primary' startIcon={<YouTubeIcon />}>
                      Add YouTube Video
                    </Button>
                  }
                >
                  <TextInput label='YouTube Video Link' source='ytLink' />
                </SimpleFormIterator>
              </ArrayInput>
            </RaGrid>
          </RaGrid>
        </GridShowLayout>

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
              {({ scopedFormData, getSource }) => {
                if (scopedFormData?.imageUrl)
                  return (
                    <IterableImageField
                      id={getSource!('imageUrl')}
                      src={scopedFormData?.imageUrl}
                    />
                  );
                if (scopedFormData?.ytLink)
                  return (
                    <YouTubePlayer
                      id={getSource!('ytLink')}
                      link={scopedFormData?.ytLink}
                    />
                  );
              }}
            </FormDataConsumer>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditMedia;
