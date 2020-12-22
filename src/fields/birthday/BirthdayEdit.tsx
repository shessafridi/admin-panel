import * as React from 'react';
import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import SaveToolbar from '../../common/SaveToolbar';

const EditBirthday: React.FC = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={<SaveToolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <TextInput label='Name' source='name' />
        <TextInput label='Regestration' source='reg' />
        <DateInput label='Date' source='date' />

        <ImageField source='imageUrl' label='Image' />
        <FileInput
          accept='image/*'
          label='Image Upload'
          source='imageUploaders.imageUrl'
        >
          <ImageField source='src' title='title' />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditBirthday;
