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
import {
  useVideoEnabled,
  useYouTubeLink,
} from '../../common/Video/useVideoEnabled';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/Dialog/DialogToolbar';
import YouTubePlayerField from '../../components/YouTubePlayerField';

const EditNotice: React.FC<EditProps> = props => {
  const selected = useVideoEnabled(props.resource!, props.id!);
  const selectedLink = useYouTubeLink(props.resource!, props.id!);
  const [isVideo, setIsVideo] = React.useState(selected);
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    setIsVideo(selected);
    setLink(selectedLink);
  }, [selected, selectedLink]);

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
                label='Upload Video'
                source='videoOptions.enabled'
              />
              <TextInput
                label='YouTube Video Link'
                fullWidth
                onChange={e => setLink(e.target.value)}
                className={isVideo ? '' : 'd-none'}
                source='videoOptions.ytLink'
              />
              <ImageField
                className={!isVideo ? '' : 'd-none'}
                source='imageUrl'
                label='Image'
              />
              <YouTubePlayerField
                className={isVideo ? '' : 'd-none'}
                link={link}
                source='yt-player'
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
