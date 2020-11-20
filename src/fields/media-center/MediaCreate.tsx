import * as React from 'react';
import {
  ArrayInput,
  Create,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PaddedContainer from '../../common/PaddedContainer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export interface CreateMediaProps {}

const CreateMedia: React.FC<CreateMediaProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>
          Create a new event
        </h2>
      </div>
      <Create {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput label='Title' fullWidth={true} source='title' />
          <DateInput
            label='Date'
            defaultValue={new Date().toLocaleDateString()}
            source='date'
          />
          <FileInput
            accept='image/*'
            label='Upload Cover Image'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          <FileInput
            accept='image/*'
            multiple={true}
            label='Upload Event Images'
            source='imageUploaders.gallery'
          >
            <ImageField source='src' title='title' />
          </FileInput>

          <ArrayInput label='Add YouTube Link' source='mergeFields.gallery'>
            <SimpleFormIterator
              removeButton={
                <IconButton style={{ marginLeft: '20px', color: '#f44336' }}>
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
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateMedia;
