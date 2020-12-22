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
import SaveToolbar from '../../common/SaveToolbar';

export interface CreateNoticeProps extends CreateProps {}

const CreateNotice: React.FC<CreateNoticeProps> = props => {
  const [isVideo, setIsVideo] = React.useState(false);
  return (
    <Create title='Add a new notice card' {...props}>
      <SimpleForm
        toolbar={<SaveToolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <TextInput label='Title' source='title' />
        <BooleanInput
          onChange={e => setIsVideo(e)}
          defaultValue={isVideo}
          label='Enable Video'
          source='videoOptions.enabled'
        />
        {isVideo && (
          <TextInput label='YouTube Video Link' source='videoOptions.ytLink' />
        )}
        {!isVideo && (
          <FileInput
            accept='image/*, .pdf'
            label='File Upload'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
        )}
        <TextInput
          rows={6}
          label='Text'
          defaultValue={''}
          multiline={true}
          source='text'
        />
      </SimpleForm>
    </Create>
  );
};

export default CreateNotice;
