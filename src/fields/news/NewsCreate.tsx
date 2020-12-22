import * as React from 'react';
import {
  Create,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import SaveToolbar from '../../common/SaveToolbar';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';

export interface CreateNewsProps {}

const CreateNews: React.FC<CreateNewsProps> = props => {
  return (
    <Create title='Add another News' {...props}>
      <SimpleForm
        toolbar={<SaveToolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth label='Title' source='title' />
              <DateInput
                label='Date'
                fullWidth
                defaultValue={new Date().toLocaleDateString()}
                source='date'
              />
              <TextInput
                fullWidth
                rows={6}
                label='Text'
                multiline={true}
                source='text'
              />
            </RaGrid>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <FileInput
                accept='image/*'
                label='Image Upload'
                source='imageUploaders.imageUrl'
              >
                <ImageField source='src' title='title' />
              </FileInput>
            </RaGrid>
          </RaGrid>
        </GridShowLayout>
      </SimpleForm>
    </Create>
  );
};

export default CreateNews;
