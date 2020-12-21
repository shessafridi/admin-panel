import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import EditHeader from './HeaderEdit';
import CreateHeader from './HeaderCreate';
import ListView from '../../common/ListView';

export interface HeadersListProps {}
const HeadersList: React.FC<HeadersListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      createDialogView={CreateHeader}
      editDialogView={EditHeader}
      desc='Customize the header section of the website.'
      {...props}
    >
      <TextField source='id' sortable={false} />
      <TextField source='title' sortable={false} />
      {!isSmall && <TextField source='text' sortable={false} />}
      <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      />
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default HeadersList;
