import * as React from 'react';
import {
  Create,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

interface CreateBirthdayProps {}

const CreateBirthday: React.FC<CreateBirthdayProps> = props => {
  return (
    <Create title='Add a new birthday' {...props}>
      <SimpleForm
        toolbar={<Toolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <TextInput label='Name' source='name' />
        <TextInput label='Regestration' source='reg' />
        <DateInput
          defaultValue={new Date().toLocaleDateString()}
          label='Date'
          source='date'
        />

        <FileInput
          accept='image/*'
          label='Image Upload'
          source='imageUploaders.imageUrl'
        >
          <ImageField source='src' title='title' />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateBirthday;
