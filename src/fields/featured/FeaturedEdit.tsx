import * as React from 'react';
import {
  ArrayInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  SimpleFormIterator,
  SimpleShowLayout,
  TextInput,
  useRefresh,
} from 'react-admin';
import SaveToolbar from '../../common/SaveToolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MainContainer from '../../common/MainContainer';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    '& li': {
      margin: '4px',
      borderRadius: '4px',
      border: '1px solid rgba(0,0,0,.1)',
      '& p': {
        display: 'none',
      },
      '& section': {
        padding: '10px 20px',
      },
    },
  },
  small: {
    padding: '0',
    paddingBottom: '0 !important',
    gridTemplateColumns: '1fr',
  },
});

const EditFeatured: React.FC = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const refresh = useRefresh();

  return (
    <MainContainer>
      <h3 className='listview-title'>Featured</h3>
      <p>Customized the featured section of the website.</p>

      <Edit
        id={1}
        component='div'
        onSuccess={() => refresh()}
        undoable={false}
        {...props}
      >
        <SimpleForm toolbar={<SaveToolbar />} margin='normal' redirect={false}>
          <SimpleShowLayout
            className={
              isSmall ? `${classes.root} ${classes.small}` : classes.root
            }
          >
            <ImageField source='imageUrl' label='Image' />
            <FileInput
              accept='image/*'
              label='Upload Featured Image'
              source='imageUploaders.imageUrl'
            >
              <ImageField source='src' title='title' />
            </FileInput>
          </SimpleShowLayout>

          <ArrayInput source='cards'>
            <SimpleFormIterator
              className={
                isSmall ? `${classes.root} ${classes.small}` : classes.root
              }
              disableAdd={true}
              disableRemove={true}
            >
              <TextInput label='Card Title' fullWidth source='title' />
              <TextInput
                label='Card Text'
                rows={6}
                multiline={true}
                fullWidth
                source='text'
              />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Edit>
    </MainContainer>
  );
};

export default EditFeatured;
