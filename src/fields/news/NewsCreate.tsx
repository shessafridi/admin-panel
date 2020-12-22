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

export interface CreateNewsProps {}

const CreateNews: React.FC<CreateNewsProps> = props => {
  return (
    <Create title='Add another News' {...props}>
      <SimpleForm
        toolbar={<SaveToolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <TextInput label='Title' source='title' />
        <DateInput
          label='Date'
          defaultValue={new Date().toLocaleDateString()}
          source='date'
        />
        <FileInput
          accept='image/*'
          label='Image Upload'
          source='imageUploaders.imageUrl'
        >
          <ImageField source='src' title='title' />
        </FileInput>
        <TextInput
          rows={6}
          defaultValue={''}
          multiline={true}
          label='Text'
          source='text'
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateNews;
