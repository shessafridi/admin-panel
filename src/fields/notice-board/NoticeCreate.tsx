import * as React from 'react';
import {
  BooleanInput,
  Create,
  CreateProps,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/DialogToolbar';

export interface CreateNoticeProps extends CreateProps {}

const CreateNotice: React.FC<CreateNoticeProps> = props => {
  const [isVideo, setIsVideo] = React.useState(false);
  return (
    <Create title='Add a new notice card' {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth label='Title' source='title' />
              <DateInput
                label='Date'
                fullWidth
                defaultValue={new Date().toLocaleDateString()}
                source='date'
              />
              <TextInput
                fullWidth
                rows={6}
                label='Text'
                multiline={true}
                source='text'
              />
            </RaGrid>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <BooleanInput
                onChange={e => setIsVideo(e)}
                defaultValue={isVideo}
                label='Enable Video'
                source='videoOptions.enabled'
              />
              <TextInput
                label='YouTube Video Link'
                fullWidth
                className={isVideo ? '' : 'd-none'}
                source='videoOptions.ytLink'
              />
              <FileInput
                accept='image/*, .pdf'
                label='File Upload'
                className={!isVideo ? '' : 'd-none'}
                source='imageUploaders.imageUrl'
              >
                <ImageField source='src' title='title' />
              </FileInput>
            </RaGrid>
          </RaGrid>
        </GridShowLayout>
      </SimpleForm>
    </Create>
  );
};

export default CreateNotice;
