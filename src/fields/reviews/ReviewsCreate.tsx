import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import DialogToolBar from '../../common/Dialog/DialogToolbar';
import { validateReview } from '../../common/validators';

interface CreateReviewProps {}

const CreateReview: React.FC<CreateReviewProps> = props => {
  return (
    <Create title='Add a new Review' {...props}>
      <SimpleForm
        validate={validateReview}
        toolbar={<DialogToolBar />}
        margin='normal'
        redirect='list'
      >
        <TextInput fullWidth label='Name' source='name' />
        <TextInput
          multiline
          rows={8}
          fullWidth
          label='Review'
          source='review'
        />
        {/* <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item>
             
            </RaGrid>
          </RaGrid>
        </GridShowLayout> */}
      </SimpleForm>
    </Create>
  );
};

export default CreateReview;
