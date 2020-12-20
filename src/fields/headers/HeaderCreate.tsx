import * as React from 'react';
import {
  Create,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
  Toolbar,
  SelectInput,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import { icons } from '../../common/icons';

interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <Create title='Add a new header' {...props}>
      <SimpleForm
        toolbar={<Toolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth={true} required={true} source='title' />
              <SelectInput
                label='Navigation Icon'
                translateChoice={false}
                fullWidth={true}
                source='nav.icon'
                choices={icons}
              />
              <TextInput
                label='Navigation Label'
                fullWidth={true}
                source='nav.text'
              />

              <TextInput
                rows={6}
                required={true}
                multiline={true}
                fullWidth={true}
                source='text'
              />
            </RaGrid>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <FileInput
                accept='image/*'
                label='Image Upload'
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

export default CreateHeader;
