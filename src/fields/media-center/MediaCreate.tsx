import * as React from 'react';
import {
  ArrayInput,
  Create,
  DateInput,
  FileInput,
  FormDataConsumer,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import YouTubePlayer from '../../common/Video/YouTubePlayer';
import { validateTitle } from '../../common/validators';
import { NextToolbar } from './MediaEdit';

export interface CreateMediaProps {}

const CreateMedia: React.FC<CreateMediaProps> = props => {
  const [page, setPage] = React.useState<'one' | 'two'>('one');
  return (
    <Create {...props}>
      <SimpleForm
        validate={validateTitle}
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
              <DateInput
                label='Date'
                fullWidth
                defaultValue={new Date().toLocaleDateString()}
                source='date'
              />
            </RaGrid>

            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
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
    </Create>
  );
};

export default CreateMedia;
