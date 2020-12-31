import * as React from 'react';
import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import {
  ArrayInput,
  DateInput,
  Edit,
  FileInput,
  FormDataConsumer,
  ImageField,
  SaveButton,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Toolbar,
} from 'react-admin';
import IterableImageField from '../../common/IterableImageField';
import DeleteIcon from '@material-ui/icons/Delete';
import YouTubePlayer from '../../common/Video/YouTubePlayer';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    height: '280px',
    overflowY: 'scroll',
    marginTop: '-40px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    '& li': {
      flexDirection: 'column-reverse',
      margin: '4px',
      borderRadius: '4px',
      border: '1px solid rgba(0,0,0,.1)',
      '& p': {
        display: 'none',
      },
      '& section': {
        padding: '4px 0',
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

export const IgnoreButton = ({ onClick, label, className }) => {
  return (
    <Button
      className={className}
      color='primary'
      style={{ marginRight: '8px' }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export const NextToolbar = ({ isOnNextPage, setPage, ...rest }) => {
  return (
    <Toolbar {...rest} width={'lg'} classes={{ toolbar: 'fixedToolbar' }}>
      <SaveButton
        className={!isOnNextPage ? 'd-none' : ''}
        disabled={rest.saving || rest.invalid}
      />
      <IgnoreButton
        className={isOnNextPage ? 'd-none' : ''}
        onClick={() => {
          setPage('two');
        }}
        label='Next'
      />
      <IgnoreButton
        className={!isOnNextPage ? 'd-none' : ''}
        onClick={() => setPage('one')}
        label='Back'
      />
    </Toolbar>
  );
};

const EditMedia: React.FC = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = React.useState<'one' | 'two'>('one');
  return (
    <Edit {...props}>
      <SimpleForm
        submitOnEnter={true}
        toolbar={
          <NextToolbar setPage={setPage} isOnNextPage={page === 'two'} />
        }
        margin='normal'
        redirect='list'
      >
        <GridShowLayout
          className={page === 'two' ? 'd-none' : 'gridShowLayout'}
        >
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
          </RaGrid>
        </GridShowLayout>

        <GridShowLayout
          className={page === 'one' ? 'd-none' : 'gridShowLayout'}
        >
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 0' }} item sm={12}>
              <ArrayInput label='' source='gallery'>
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
                  <FormDataConsumer>
                    {({ scopedFormData, getSource }) => {
                      if (scopedFormData?.ytLink) {
                        return (
                          <YouTubePlayer
                            id={getSource!('ytLink')}
                            link={scopedFormData?.ytLink}
                          />
                        );
                      }
                      return <></>;
                    }}
                  </FormDataConsumer>
                </SimpleFormIterator>
              </ArrayInput>
            </RaGrid>
          </RaGrid>
        </GridShowLayout>
      </SimpleForm>
    </Edit>
  );
};

export default EditMedia;
