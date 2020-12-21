import * as React from 'react';
import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
// import IterableImageField from '../../common/IterableImageField';

const EditNews: React.FC = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={<Toolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <TextInput label='Title' source='title' />
        <DateInput source='date' />
        <ImageField source='imageUrl' label='Image' />

        <FileInput
          accept='image/*'
          label='Image Upload'
          source='imageUploaders.imageUrl'
        >
          <ImageField source='src' title='title' />
        </FileInput>
        <TextInput rows={6} label='Text' multiline={true} source='text' />
      </SimpleForm>
    </Edit>
  );
};

export default EditNews;
