import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import ListView from '../../common/ListView';
import CreateMedia from './MediaCreate';
import EditMedia from './MediaEdit';

export interface MediaListProps {}
const MediaList: React.FC<MediaListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      title='Media Center'
      createDialogView={CreateMedia}
      editDialogView={EditMedia}
      desc='Customize the events inside the media center'
      {...props}
    >
      <TextField source='id' sortable={false} />
      <TextField source='title' sortable={false} />
      <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      />
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default MediaList;
