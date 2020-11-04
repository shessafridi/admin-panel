import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';

export interface EditHeaderProps {}

const EditHeader: React.FC<EditHeaderProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h3 style={{ marginLeft: '18px' }}>Edit Header</h3>
      </div>
      <Edit {...props}>
        <SimpleForm redirect='list'>
          <TextInput disabled source='id' />
          <TextInput required={true} source='title' />
          <TextInput required={true} multiline={true} source='text' />
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditHeader;
