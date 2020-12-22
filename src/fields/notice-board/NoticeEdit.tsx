import * as React from 'react';
import {
  BooleanInput,
  DateInput,
  Edit,
  EditProps,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { useVideoEnabled } from '../../common/useVideoEnabled';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/DialogToolbar';

const EditNotice: React.FC<EditProps> = props => {
  const selected = useVideoEnabled(props.resource!, props.id!);
  const [isVideo, setIsVideo] = React.useState(selected);
  React.useEffect(() => {
    setIsVideo(selected);
  }, [selected]);

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth label='Title' source='title' />
              <DateInput label='Date' fullWidth source='date' />
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
              <ImageField
                className={!isVideo ? '' : 'd-none'}
                source='imageUrl'
                label='Image'
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
    </Edit>
  );
};

export default EditNotice;
