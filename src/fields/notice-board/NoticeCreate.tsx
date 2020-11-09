import * as React from 'react';
import {
  BooleanInput,
  Create,
  CreateProps,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';

export interface CreateNoticeProps extends CreateProps {}

const CreateNotice: React.FC<CreateNoticeProps> = props => {
  const [isVideo, setIsVideo] = React.useState(false);
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px' }}>Add a new Notice</h2>
      </div>
      <Create title='Add a new header' {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput required={true} source='title' />
          <BooleanInput
            onChange={e => setIsVideo(e)}
            label='Enable Video'
            source='videoOptions.enabled'
          />
          {!isVideo && (
            <FileInput accept='image/*' source='imageUpload'>
              <ImageField source='src' title='title' />
            </FileInput>
          )}
          <TextInput rows={6} required={true} multiline={true} source='text' />
          {/* <TextInput disabled source='imageUrl' /> */}
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateNotice;
