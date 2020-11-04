import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';

export interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <Create title='Add a new header' {...props}>
        <>
          <div>
            <BackButton />
            <h3 style={{ marginLeft: '18px' }}>Add a new Header</h3>
          </div>
          <SimpleForm redirect='list'>
            <TextInput required={true} source='title' />
            <TextInput required={true} multiline={true} source='text' />
          </SimpleForm>
        </>
      </Create>
    </PaddedContainer>
  );
};

export default CreateHeader;