import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import DialogToolBar from '../../common/Dialog/DialogToolbar';

const EditReview: React.FC = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <TextInput fullWidth label='Name' source='name' />
        <TextInput
          fullWidth
          multiline
          rows={8}
          label='Review'
          source='review'
        />
      </SimpleForm>
    </Edit>
  );
};

export default EditReview;
