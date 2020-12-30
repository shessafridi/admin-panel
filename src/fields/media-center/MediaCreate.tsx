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
import DialogToolBar from '../../common/DialogToolbar';
import YouTubePlayer from '../../common/YouTubePlayer';
import { validateTitle } from '../../common/validators';

export interface CreateMediaProps {}

const CreateMedia: React.FC<CreateMediaProps> = props => {
  return (
    <Create {...props}>
      <SimpleForm
        validate={validateTitle}
        toolbar={<DialogToolBar />}
        margin='normal'
        redirect='list'
      >
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth label='Title' source='title' />
              <DateInput
                fullWidth
                label='Date'
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
