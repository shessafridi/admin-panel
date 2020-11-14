import * as React from 'react';
import {
  BooleanInput,
  Edit,
  EditProps,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';
import { useVideoEnabled } from '../../common/useVideoEnabled';

const EditNotice: React.FC<EditProps> = props => {
  const selected = useVideoEnabled(props.resource!, props.id!);
  const [isVideo, setIsVideo] = React.useState(selected);
  React.useEffect(() => {
    setIsVideo(selected);
  }, [selected]);

  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>
          Edit Notice
        </h2>
      </div>
      <Edit {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput disabled source='id' />
          <TextInput required={true} source='title' />
          <ImageField source='imageUrl' label='Image' />
          <BooleanInput
            onChange={e => setIsVideo(e)}
            label='Enable Video'
            source='videoOptions.enabled'
          />

          {isVideo && (
            <TextInput
              label='YouTube Video Link'
              source='videoOptions.ytLink'
            />
          )}

          {!isVideo && (
            <FileInput
              accept='image/*'
              label='Image Upload'
              source='imageUploaders.imageUrl'
            >
              <ImageField source='src' title='title' />
            </FileInput>
          )}

          <TextInput rows={6} required={true} multiline={true} source='text' />
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditNotice;
